import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FeedPost from '../../components/FeedPost';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listShares, listPosts} from './queries';
import {DataStore, SortDirection, Predicates} from 'aws-amplify';
import {onCreatePost, onCreateShare} from '../../graphql/subscriptions';
import ShareItem from '../../components/ShareItem/ShareItem';

const img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedScreen = props => {
  const [posts, setPosts] = useState([]);
  const [shares, setShares] = useState([]);
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const fetchPostsAndShares = async () => {
      const postsResult = await API.graphql(graphqlOperation(listPosts));
      const sharesResult = await API.graphql(graphqlOperation(listShares));

      const sortedPosts = postsResult.data?.listPosts?.items.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt),
      );
      const sortedShares = sharesResult.data?.listShares?.items.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt),
      );

      setPosts(sortedPosts);
      setShares(sortedShares);
    };

    fetchPostsAndShares();

    const createPostSubscription = API.graphql(
      graphqlOperation(onCreatePost),
    ).subscribe({
      next: ({value}) => {
        const newPost = value.data.onCreatePost;
        setPosts(prevPosts => [newPost, ...prevPosts]);
      },
      error: error => console.warn(error),
    });

    const createShareSubscription = API.graphql(
      graphqlOperation(onCreateShare),
    ).subscribe({
      next: ({value}) => {
        const newShare = value.data.onCreateShare;
        setShares(prevShares => [newShare, ...prevShares]);
      },
      error: error => console.warn(error),
    });

    return () => {
      createPostSubscription.unsubscribe();
      createShareSubscription.unsubscribe();
    };
  }, []);

  const createPost = () => {
    navigation.navigate('Create Post');
  };

  const mergedArray = [...posts, ...shares];
  mergedArray.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const renderFeedItem = ({item}) => {
    if (item.hasOwnProperty('content')) {
      // Bài đăng
      return <FeedPost post={item} />;
    } else if (item.hasOwnProperty('post')) {
      // Bài chia sẻ
      return <ShareItem share={item} />;
    } else {
      return null;
    }
  };

  return (
    <FlatList
      data={mergedArray}
      renderItem={renderFeedItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{uri: img}} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
});
