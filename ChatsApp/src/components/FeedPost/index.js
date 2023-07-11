import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LikeImage from '../../../assets/images/like.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getUser, listLikesByPost} from '../../graphql/queries';
import {S3Image} from 'aws-amplify-react-native';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
import {
  createLike,
  deleteLike,
  createShare,
  createPost,
} from '../../graphql/mutations';
import {DataStore} from '@aws-amplify/datastore';
import {Like} from '../../models';
const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const FeedPost = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const [likeCount, setLikeCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [content, setContent] = useState('');
  const handleShareButtonPress = () => {
    setShowAlert(true);
  };
  const handleShare = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await API.graphql(
        graphqlOperation(createShare, {
          input: {
            userID: currentUser?.attributes?.sub,
            postID: post.id,
            Content: content,
          },
        }),
      );
      console.log('sharethanhcong');
    } catch (error) {
      console.log('Error creating share:', error);
    }
    setShowAlert(false);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleComment = () => {
    navigation.navigate('Comment', {post: post});
  };
  useEffect(() => {
    if (!post.postUserId) {
      return;
    }

    const fetchUser = async () => {
      try {
        const user = await API.graphql(
          graphqlOperation(getUser, {id: post.postUserId}),
        );
        setUser(user.data.getUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [post.postUserId]);
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likeResponse = await API.graphql(
          graphqlOperation(listLikesByPost, {postID: post.id}),
        );
        const likesByPost = likeResponse.data.listLikesByPost.items;
        const filteredLikes = likesByPost.filter(
          item => item._deleted !== true,
        );
        const totalLikes = filteredLikes.length;
        setLikeCount(totalLikes);

        const currentUser = await Auth.currentAuthenticatedUser();
        const userLikedPost = filteredLikes.some(
          item => item.userID === currentUser?.attributes?.sub,
        );
        setIsLiked(userLikedPost);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };
    fetchLikes();
  }, [post.id]);

  const likePost = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const likeData = {
        input: {
          postID: post.id,
          userID: currentUser?.attributes?.sub,
        },
      };
      await API.graphql(graphqlOperation(createLike, likeData));
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      console.log('Post liked:', post.id);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };
  const unlikePost = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const likeResponse = await API.graphql(
        graphqlOperation(listLikesByPost, {postID: post.id}),
      );
      const likesByPost = likeResponse.data.listLikesByPost.items;
      const like = likesByPost.find(
        like => like.userID === currentUser?.attributes?.sub,
      );

      if (like) {
        const likeID = like.id;
        const deleteInput = {
          input: {
            id: likeID,
            _version: like._version,
          },
        };
        await API.graphql(graphqlOperation(deleteLike, deleteInput));
        setLikeCount(likeCount - 1);
        setIsLiked(false);
        console.log('Post unliked:', post.id);
      } else {
        console.log('User has not liked this post.');
      }
    } catch (error) {
      console.error('Error unliking post:', error);
    }
  };

  return (
    <View style={styles.post}>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate('Profile', {id: user?.id})}>
        {user?.image ? (
          <S3Image imgKey={user.image} style={styles.profileImage} />
        ) : (
          <Image source={{uri: dummy_img}} style={styles.profileImage} />
        )}
        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.subtitle}>
            {dayjs(post.createdAt).fromNow(true)}
          </Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.description}>{post?.content}</Text>
      {post?.image && (
        <S3Image imgKey={post.image} style={styles.image} resizeMode="cover" />
      )}
      <View style={styles.footer}>
        <View style={styles.starsRow}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={LikeImage}
              style={styles.likeIcon}
              onPress={isLiked}
            />
            <Text style={styles.like}>Like: {likeCount}</Text>
          </View>
          <Text style={styles.share}> shares</Text>
        </View>
        <View style={styles.buttonRows}>
          {/* Like button */}
          <Pressable
            style={styles.iconButton}
            onPress={() => {
              if (isLiked) {
                unlikePost();
              } else {
                likePost();
              }
            }}>
            <AntDesign
              name="like2"
              size={18}
              color={isLiked ? 'royalblue' : 'gray'}
            />
            <Text
              style={[
                styles.iconButtonText,
                {color: isLiked ? 'royalblue' : 'gray'},
              ]}>
              Like
            </Text>
          </Pressable>

          {/* Comment button */}
          <Pressable style={styles.iconButton} onPress={handleComment}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </Pressable>

          {/* Share button */}
          <TouchableOpacity
            onPress={handleShareButtonPress}
            style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.share}>shares</Text>
          </TouchableOpacity>
          {/* Alert */}
          <Modal visible={showAlert} animationType="slide" transparent>
            <View style={styles.alertContainer}>
              <View style={styles.alertContent}>
                <TextInput
                  style={styles.input}
                  value={content}
                  onChangeText={setContent}
                  placeholder="Enter share content"
                  placeholderTextColor="gray"
                />
                <TouchableOpacity
                  onPress={handleShare}
                  style={styles.shareButton}>
                  <Text style={styles.shareButtonText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCloseAlert}
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  post: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
  //body
  description: {
    padding: 10,
    lineHeight: 20,
  },
  bodyImage: {
    width: '100%',
    aspectRatio: 1, //width=height
  },
  footer: {
    paddingHorizontal: 30,
  },
  starsRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  like: {
    color: 'gray',
  },
  share: {
    color: 'gray',
    marginLeft: 'auto',
  },
  buttonRows: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  share: {
    marginLeft: 5,
    color: 'gray',
  },
  alertContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  shareButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
