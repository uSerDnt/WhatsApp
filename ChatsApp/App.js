/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text} from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreens from './src/screens/ChatsScreen/ChatsScreens';
import ChatScreen from './src/screens/ChatScreen';
import InputBox from './src/components/InputBox';
import Navigator from './src/navigation';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Amplify, Auth, API, graphqlOperation} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
Amplify.configure({...awsconfig, Analytics: {disabled: true}});

function App() {
  useEffect(() => {
    const syncUser = async () => {
      // get Auth user
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      // query the database using Auth user id (sub)
      const userData = await API.graphql(
        graphqlOperation(getUser, {id: authUser.attributes.sub}),
      );

      if (userData.data.getUser) {
        console.log('User already exists in DB');
        return;
      }
      // if there is no users in db, create one
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: 'Hey, I am using WhatsApp',
      };

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };

    syncUser();
  }, []);
  return <Navigator />;
}

export default withAuthenticator(App);
