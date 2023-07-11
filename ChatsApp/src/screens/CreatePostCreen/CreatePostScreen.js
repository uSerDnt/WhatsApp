import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
var ImagePicker = require('react-native-image-picker');
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth, Storage} from 'aws-amplify';
import {createPost, createNotification} from '../../graphql/mutations';
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
import {v4 as uuidv4} from 'uuid';
import {getUser, listFriends} from '../../graphql/queries';
import {Platform} from 'react-native';
import {onCreatePost} from '../../graphql/subscriptions';
import {Notifications} from 'aws-amplify';
const CreatePostScreen = posts => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [progresses, setProgresses] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const userId = userData?.attributes?.sub;

        if (!userId) {
          console.log('User ID not found');
          return;
        }
        const response = await API.graphql(
          graphqlOperation(getUser, {id: userId}),
        );
        const dbUser = response.data?.getUser;
        setUser(dbUser);
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const onPost = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    const newPost = {
      content,
      postUserId: userData.attributes.sub,
    };
    if (image) {
      newPost.image = await uploadFile(image);
    }

    // Create notification
    const userId = userData.attributes.sub;
    const notification = {
      title: 'Bài viết mới',
      body: 'Bạn đã đăng một bài viết mới.',
    };
    await Notifications.Push.identifyUser(userId, notification);

    await API.graphql(graphqlOperation(createPost, {input: newPost}));
    setContent('');
    setImage('');
    navigation.goBack();
  };
  const pickImage = () => {
    // No permissions request is necessary for launching the image library
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'mixed',
        selectionLimit: 10,
        quality: 1,
        multiple: true,
      },
      response => {
        if (!response.didCancel) {
          if (Array.isArray(response.assets)) {
            setImage(response.assets[0].uri);
          } else {
            setImage(response.uri);
          }
        }
      },
    );
  };

  const uploadFile = async fileUri => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: 'image/png',
        progressCallback: progress => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      return key;
    } catch (err) {
      console.log('Error uploading file:', err);
    }
  };
  const fetchFriends = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const friendData = await API.graphql(
        graphqlOperation(listFriends, {
          filter: {
            or: [
              {requesterID: {eq: user.attributes.sub}},
              {requesteeID: {eq: user.attributes.sub}},
            ],
            status: {eq: 'ACCEPTED'},
          },
        }),
      );
      const friendList = friendData.data.listFriends.items;
      setFriends(friendList);
    } catch (error) {
      console.log('Error fetching friends:', error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: async event => {
        const {data} = event;
        const {onCreatePost: newPost} = data;

        // Tạo thông báo mới
        const userData = await Auth.currentAuthenticatedUser();
        const notificationData = {
          userID: userData.attributes.sub,
          action: 'POST_CREATED',
          postID: newPost.id,
        };
        await API.graphql(
          graphqlOperation(createNotification, {input: notificationData}),
        );

        setNotifications(prevNotifications => [
          ...prevNotifications,
          notificationData,
        ]);
      },
      error: error => {
        console.log('Error subscribing to onCreatePost:', error);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={[styles.container, {marginBottom: insets.bottom}]}
      contentContainerStyle={{flex: 1}}
      keyboardVerticalOffset={150}>
      <View style={styles.header}>
        <S3Image imgKey={user?.image} style={styles.profileImage} />
        <Text style={styles.name}>{user?.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      <TextInput
        placeholder="ban nghi gi?"
        multiline
        value={content}
        onChangeText={setContent}
      />
      {image && <Image source={{uri: image}} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!content}></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginVertical: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default CreatePostScreen;
