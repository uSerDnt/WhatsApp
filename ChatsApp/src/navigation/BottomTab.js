import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatsScreens from '../screens/ChatsScreen/ChatsScreens';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ContactScreen from '../screens/ContactScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: {backgroundColor: 'whitesmoke'},
        headerStyle: {backgroundColor: 'whitesmoke'},
      }}>
      <Tab.Screen
        name="Status"
        component={ChatsScreens}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="logo-whatsapp" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={ChatsScreens}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="call-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={ChatsScreens}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="camera-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreens}
        options={({navigation}) => ({
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-chatbubbles-sharp" size={20} color={color} />
          ),
          headerRight: ({color}) => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={20}
              color="royalblue"
              style={{margin: 15}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
