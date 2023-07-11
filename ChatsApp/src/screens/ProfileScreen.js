import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  SafeAreaView,
  Alert,
  Button,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedPost from '../components/FeedPost';
import {getUser, getPost, listPosts} from '../graphql/queries';
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
import {API, graphqlOperation, Auth, Storage} from 'aws-amplify';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const bg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';
const profilePictureWidth = Dimensions.get('window').width * 0.4;

const ProfileScreenHeader = ({user, isMe = false}) => {
  const navigation = useNavigation();

  const signOut = async () => {
    Auth.signOut();
  };

  if (!user) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {user?.data?.getUser?.image ? (
          <S3Image imgKey={user.data.getUser.image} style={styles.image} />
        ) : (
          <Image source={{uri: dummy_img}} style={styles.image} />
        )}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontFamily: 'regular',
                fontSize: 18,
                lineHeight: 22,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {user.data.getUser.name}
            </Text>
            {/* <Text
              style={{
                fontFamily: 'regular',
                fontSize: 14,
                lineHeight: 22,
                color: 'black',
              }}>
              Email
            </Text> */}
            <View style={styles.textLine}>
              <MaterialCommunityIcons
                name="calendar-heart"
                size={18}
                color="gray"
                style={{width: 25}}
              />
              <Text>{user?.data?.getUser?.birthday}</Text>
            </View>
            <View style={styles.textLine}>
              <FontAwesome
                name="transgender"
                size={18}
                color="gray"
                style={{width: 25}}
              />
              <Text>{user?.data?.getUser?.gender}</Text>
            </View>
            <View style={styles.textLine}>
              <Ionicons
                name="time"
                size={18}
                color="gray"
                style={{width: 25}}
              />
              <Text>
                Joined {''}
                {dayjs(user?.data?.getUser?.createdAt).format('DD/MM/YYYY')}
              </Text>
            </View>
          </View>
          {isMe && (
            <>
              <Feather
                onPress={() => navigation.navigate('Update Profile')}
                name="edit"
                size={24}
                color="black"
              />
            </>
          )}
        </View>
      </View>
      <View>
        {isMe && (
          <>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={[styles.button, {backgroundColor: 'royalblue'}]}>
                <AntDesign name="pluscircle" size={16} color="white" />
                <Text style={[styles.buttonText, {color: 'white'}]}>
                  Create post
                </Text>
              </Pressable>
              <Pressable
                onPress={signOut}
                style={[styles.button, {flex: 0, width: 50}]}>
                <MaterialIcons name="logout" size={16} color="black" />
              </Pressable>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [isMe, setIsMe] = useState(false);
  const [posts, setPosts] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  // const userId = route?.params?.id;

  useEffect(() => {
    const fetchData = async () => {
      // get the authenticated user
      const userData = await Auth.currentAuthenticatedUser();
      // take the user id from the route or from the authenticated user
      const userId = route?.params?.id || userData?.attributes?.sub;

      if (!userId) {
        return;
      }

      // keep track if we are querying the data about the authenticated user
      const isMe = userId === userData?.attributes?.sub;
      setIsMe(isMe);
      const dbUser = await API.graphql(graphqlOperation(getUser, {id: userId}));
      // console.log('dbUser:', dbUser);

      if (!dbUser) {
        // if we couldn't find the user in the database
        if (isMe) {
          // and it is my profile, then redirect to Update Profile page
          navigation.navigate('Update Profile');
        } else {
          // otherwise, Alert the user
          Alert.alert('User not found!');
        }
        return;
      }
      // save the user in the state
      setUser(dbUser);
      const dbPosts = await API.graphql(
        graphqlOperation(listPosts, {filter: {postUserId: {eq: userId}}}),
      );
      setPosts(dbPosts.data.listPosts.items);
    };
    fetchData();
  }, []);
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <ProfileScreenHeader user={user} isMe={isMe} />
          <Text style={styles.sectionTitle}>Posts</Text>
        </>
      )}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 44,
    height: 260,
    marginHorizontal: 22,
    paddingHorizontal: 6,
    paddingVertical: 18,
    borderColor: '#F7F7F7',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#18274B',
    shadowOffset: {
      width: 0,
      height: 4.5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 0.65,
    elevation: 2,
    borderRadius: 35,
  },
  bg: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: -profilePictureWidth / 2,
  },
  image: {
    height: 150,
    width: 96,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 5,
  },
  buttonsContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  button: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    margin: 5,
    padding: 7,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    marginHorizontal: 5,
    fontWeight: '500',
  },
  textLine: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
  },
  sectionTitle: {
    marginLeft: 10,
    marginVertical: 5,
    fontWeight: '500',
    fontSize: 18,
  },
});
