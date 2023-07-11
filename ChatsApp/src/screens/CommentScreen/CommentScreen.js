import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import FeedPost from '../../components/FeedPost';
import {listCommentsByPost, getUser} from '../../graphql/queries';
import {createComment, deleteComment} from '../../graphql/mutations';
import {onCreateComment} from '../../graphql/subscriptions';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const CommentScreen = ({navigation, route}) => {
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);
  const {post} = route.params;
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(listCommentsByPost, {
            postID: post.id,
          }),
        );
        const commentsData = response.data.listCommentsByPost.items
          .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
          .filter(item => !item._deleted);

        await Promise.all(commentsData.map(fetchUserData));
        setComments(commentsData);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };

    fetchComments();

    const createCommentSubscription = API.graphql(
      graphqlOperation(onCreateComment),
    ).subscribe({
      next: ({value}) => {
        const newComment = value.data.onCreateComment;
        setComments(prevComments => [newComment, ...prevComments]);
      },
      error: error => {
        console.log('Error subscribing to createComment:', error);
      },
    });

    return () => {
      createCommentSubscription.unsubscribe();
    };
  }, [post.id]);
  const fetchUserData = async comment => {
    try {
      const response = await API.graphql(
        graphqlOperation(getUser, {id: comment.userID}),
      );
      const userData = response.data.getUser;
      // Update the comment with user data
      comment.user = userData;
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const newComment = {
        content: content,
        postID: post.id,
        userID: currentUser.attributes.sub,
      };

      await API.graphql(graphqlOperation(createComment, {input: newComment}));
      setContent('');
    } catch (error) {
      console.log('Error submitting comment:', error);
    }
  };
  const handleCommentDelete = async comment => {
    try {
      await API.graphql(
        graphqlOperation(deleteComment, {
          input: {_version: comment._version, id: comment.id},
        }),
      );

      setComments(prevComments =>
        prevComments.filter(item => item.id !== comment.id),
      );
      console.log('Comment deleted successfully');
    } catch (error) {
      console.log('Error deleting comment:', error);
    }
  };

  const handleCommentPress = item => {
    Alert.alert(
      'Delete Comment',
      'Are you sure you want to delete this comment?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => handleCommentDelete(item),
        },
      ],
    );
  };

  const renderCommentItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleCommentPress(item)}
      style={styles.commentItem}>
      <View style={styles.commentHeader}>
        {item.user?.image ? (
          <S3Image imgKey={item.user.image} style={styles.avatar} />
        ) : (
          <Image source={{uri: dummy_img}} style={styles.avatar} />
        )}
        <View>
          <Text style={styles.commentUser}>{item.user?.name}</Text>
          <Text style={styles.commentContent}>{item.content}</Text>
          <Text style={styles.commentTime}>
            {dayjs(item.createdAt).fromNow(true)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FeedPost post={post} />
      <FlatList
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCommentItem}
      />
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Type a comment..."
          value={content}
          onChangeText={setContent}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleCommentSubmit}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commentItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  commentTime: {
    color: 'gray',
  },
  commentContent: {
    marginBottom: 5,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CommentScreen;
