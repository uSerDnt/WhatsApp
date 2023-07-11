import {View, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ContactScreen from '../screens/ContactScreen';
import NewGroupScreen from '../screens/NewGroupScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen';
import AddContactToGroup from '../screens/AddContactToGroup';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import CreatePostScreen from '../screens/CreatePostCreen/CreatePostScreen';
import UpdateProfile from '../screens/UpdateProfile/UpdateProfile';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPassWordScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ConfirmSignIn from '../screens/CondfirmSignIn/ConfirmSignIn';
import {Auth, Hub, Amplify, API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../graphql/queries';
import {createUser} from '../graphql/mutations';
import CallingScreen from '../screens/CallingScreen/CallingScreen';
import IncomemingCallScreen from '../screens/IncomingCallScreen/IncomemingCallScreen';
import CallScreen from '../screens/CallScreen/CallScreen';
import ContactsScreen from '../screens/ContactsScreen/ContactsScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import CommentScreen from '../screens/CommentScreen/CommentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FriendRequest from '../screens/FriendRequest/FriendRequest';
import SearchFriendScreen from '../screens/SearchFriendScreen/SearchFriendScreen';
import CreateShortVideoScreen from '../screens/CreateShortVideoScreen/CreateShortVideoScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  const [user, setUser] = useState(undefined);
  const [userStatus, setUserStatus] = useState('');
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const syncUser = async () => {
      if (user) {
        // query the database using Auth user id (sub)
        const userData = await API.graphql(
          graphqlOperation(getUser, {id: user.attributes.sub}),
        );

        if (userData.data.getUser) {
          console.log('User already exists in DB');
          setUserStatus(userData.data.getUser.state);
          return;
        }

        // if there is no user in the database, create one
        const newUser = {
          id: user.attributes.sub,
          name: user.attributes.preferred_username,
          state: 'ACTIVE',
          status: 'Hey, I am using ChatsApp',
        };

        // create the user using the "createUser" mutation
        await API.graphql(graphqlOperation(createUser, {input: newUser}));
      }
    };

    syncUser();
  }, [user]);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);
  // if (user === undefined) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }
  if (userStatus === 'SUSPEND') {
    Alert.alert('Thông báo', 'Người dùng vô hiệu hóa');
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="ConfirmSigIn" component={ConfirmSignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  // if (userStatus === 'SUSPEND')
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}}>
          {user ? (
            <>
              <Stack.Screen
                name="Home"
                component={BottomTab}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Chat" component={ChatScreen} />
              <Stack.Screen name="Group Info" component={GroupInfoScreen} />
              <Stack.Screen name="Contacts" component={ContactScreen} />
              <Stack.Screen name="New Group" component={NewGroupScreen} />
              <Stack.Screen name="Add Contacts" component={AddContactToGroup} />
              <Stack.Screen name="Create Post" component={CreatePostScreen} />
              <Stack.Screen
                name="Create Video"
                component={CreateShortVideoScreen}
              />
              <Stack.Screen name="Camera" component={CameraScreen} />
              <Stack.Screen
                name="Feed"
                component={FeedScreen}
                // options={({navigation}) => ({
                //   headerRight: () => (
                //     <FontAwesome
                //       onPress={() => navigation.navigate('Profile')}
                //       name="user"
                //       size={24}
                //       color="gray"
                //     />
                //   ),
                // })}
              />
              <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="Update Profile" component={UpdateProfile} />
                <Stack.Screen name="Call" component={CallScreen} />
                <Stack.Screen name="Calling" component={CallingScreen} />

                <Stack.Screen
                  name="Incomeming"
                  component={IncomemingCallScreen}
                />
              </Stack.Group>
              <Stack.Screen name="Constacts" component={ContactsScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Comment" component={CommentScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="FriendRequest" component={FriendRequest} />
              <Stack.Screen
                name="SearchFriend"
                component={SearchFriendScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
              />
              <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
              <Stack.Screen
                name="ConfirmEmail"
                component={ConfirmEmailScreen}
              />
              <Stack.Screen name="ConfirmSigIn" component={ConfirmSignIn} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigator;
