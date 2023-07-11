import React, {useEffect, useState} from 'react';
import {View, FlatList, Dimensions, TouchableOpacity, Text} from 'react-native';
import ShortVideoItem from '../../components/ShortVideoItem/ShortVideoItem';
import {API, graphqlOperation} from 'aws-amplify';
import Entypo from 'react-native-vector-icons/Entypo';
import {listShortVideos} from '../../graphql/queries';
import {useNavigation} from '@react-navigation/native';
// import {postvideo} from '../../../assets/data/postvideo';
const ShortVideoScreen = () => {
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchPost = async () => {
      // fetch all the posts
      try {
        const response = await API.graphql(graphqlOperation(listShortVideos));
        setPosts(response.data.listShortVideos.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPost();
  }, []);
  const renderCreatePostButton = () => {
    if (showCreatePost) {
      return (
        <TouchableOpacity
          style={{position: 'absolute', bottom: 20, right: 20}}
          onPress={() => {
            navigation.navigate('Camera');
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 5,
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}>
            <Entypo name="folder-video" size={18} color="blue" />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'black',
                paddingLeft: 5,
              }}>
              CreatePost
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <ShortVideoItem post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 130}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        onScrollBeginDrag={() => {
          setShowCreatePost(false);
        }}
        onScrollEndDrag={() => {
          setShowCreatePost(true);
        }}
      />
      {renderCreatePostButton()}
    </View>
  );
};

export default ShortVideoScreen;
