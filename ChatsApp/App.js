/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreens from './src/screens/ChatsScreen/ChatsScreens';
import InputBox from './src/components/InputBox';
import Navigator from './src/navigation';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import {Amplify, Auth, API, graphqlOperation, Notifications} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import Analytics from '@aws-amplify/analytics';
import PushNotification from '@aws-amplify/pushnotification';
import {PubSub} from 'aws-amplify';
Amplify.configure({...awsconfig, Analytics: {disabled: true}});
Notifications.Push.enable();
function App() {
  useEffect(() => {
    const checkPermissions = async () => {
      const status = await Notifications.Push.getPermissionStatus();
      if (status === 'DENIED') {
        myFunctionToGracefullyDegradeMyApp();
        return;
      }
      if (status === 'SHOULD_REQUEST') {
        await Notifications.Push.requestPermissions();
      }
      if (status === 'SHOULD_EXPLAIN_THEN_REQUEST') {
        await myFunctionExplainingPermissionsRequest();
        await Notifications.Push.requestPermissions();
      }
    };

    const tokenReceivedHandler = token => {
      console.log('Received token:', token);
    };

    checkPermissions();
    const tokenListener =
      Notifications.Push.onTokenReceived(tokenReceivedHandler);

    return () => {
      tokenListener.remove();
    };
  }, []);

  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}

export default App;
