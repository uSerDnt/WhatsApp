import {View, Text} from 'react-native';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ContactScreen from '../screens/ContactScreen';
import NewGroupScreen from '../screens/NewGroupScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen';
import AddContactToGroup from '../screens/AddContactToGroup';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
