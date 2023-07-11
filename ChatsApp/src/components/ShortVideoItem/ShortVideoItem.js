import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Storage} from 'aws-amplify';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getUser} from '../../graphql/queries';
const ShortVideoItem = props => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');
  const [user, setUser] = useState();
  const [paused, setPaused] = useState(false);
  console.log('item', user);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  useEffect(() => {
    const fetchUser = async () => {
      const response = await API.graphql(
        graphqlOperation(getUser, {id: post?.shortVideoUserId}),
      );
      const dbUser = response.data?.getUser;
      setUser(dbUser);
    };
    fetchUser();
  }, []);
  const onLikePress = () => {
    // const likesToAdd = isLiked ? -1 : 1;
    // setPost({
    //   ...post,
    //   likes: post.likes + likesToAdd,
    // });
    // setIsLiked(!isLiked);
  };

  const getVideoUri = async () => {
    if (post.videoUri.startsWith('http')) {
      setVideoUri(post?.videoUri);
      return;
    }
    setVideoUri(await Storage.get(post.videoUri));
  };

  useEffect(() => {
    getVideoUri();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: videoUri}}
            style={styles.video}
            onError={e => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: 'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
                }}
              />

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <AntDesign
                  name={'heart'}
                  size={40}
                  color={isLiked ? 'red' : 'white'}
                />
                <Text style={styles.statsLabel}>1</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={'comment-processing-outline'}
                  size={40}
                  color="white"
                />
                <Text style={styles.statsLabel}>2</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>{user?.name}</Text>
                <Text style={styles.description}>{post?.content}</Text>
                {/* 
                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>no song</Text>
                </View> */}
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri: 'https://influencermarketinghub.com/wiki/wp-content/uploads/2020/08/1657369265111046_c5_720x720.jpeg',
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ShortVideoItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 130,
  },
  videPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  //  right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 200,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
