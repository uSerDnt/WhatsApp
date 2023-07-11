import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatsScreens from '../screens/ChatsScreen/ChatsScreens';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ContactScreen from '../screens/ContactScreen';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import CreatePostScreen from '../screens/CreatePostCreen/CreatePostScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import ContactsScreen from '../screens/ContactsScreen/ContactsScreen';
import Logindemo from '../screens/Logindemo/Logindemo';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FriendsScreen from '../screens/FriendsScreen/FriendsScreen';
import BellScreen from '../screens/BellScreen/BellScreen';
import ShortVideoScreen from '../screens/ShortVideoScreen/ShortVideoScreen';
import DemoBell from '../screens/DemoBell/DemoBell';
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
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="logo-whatsapp" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="contacts" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={ShortVideoScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Octicons name="video" size={20} color={color} />
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
        name="Notify"
        component={DemoBell}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-notifications-sharp" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-outline" size={20} color={color} />
          ),
          headerRight: ({color}) => (
            <AntDesign
              onPress={() => navigation.navigate('Settings')}
              name="setting"
              size={25}
              color="royalblue"
              style={{margin: 15}}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
