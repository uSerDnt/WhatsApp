import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ContactListItem from '../components/ContactListItem';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listUsers} from '../graphql/queries';
import {createChatRoom, createUserChatRoom} from '../graphql/mutations';
import {getCommonChatRoomWithUser} from '../Services/ChatRoomService';

const ContactScreen = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then(result => {
      setUsers(result.data?.listUsers?.items);
    });
  }, []);
  
  const createAChatRoomWithTheUser = async user => {
    // Check if we already have a ChatRoom with user
    const existingChatRoom = await getCommonChatRoomWithUser(user.id);
    if (existingChatRoom) {
      navigation.navigate('Chat', {id: existingChatRoom.chatRoom.id});
      return;
    }

    // Create a new Chatroom
    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, {input: {}}),
    );
    if (!newChatRoomData.data?.createChatRoom) {
      console.log('Error creating the chat error');
    }
    const newChatRoom = newChatRoomData.data?.createChatRoom;

    // Add the clicked user to the ChatRoom
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: {chatRoomId: newChatRoom.id, userId: user.id},
      }),
    );

    // Add the auth user to the ChatRoom
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: {chatRoomId: newChatRoom.id, userId: authUser.attributes.sub},
      }),
    );

    // navigate to the newly created ChatRoom
    navigation.navigate('Chat', {id: newChatRoom.id});
  };
  useEffect(() => {
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredUsers(filteredData);
  }, [searchTerm, users]);
  return (
    <View style={styles.page}>
      <View style={styles.searchInput}>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.searchInput}
          placeholder="Search friend..."
        />
      </View>
      <FlatList
        data={filteredUsers}
        renderItem={({item}) => (
          <ContactListItem
            user={item}
            onPress={() => createAChatRoomWithTheUser(item)}
          />
        )}
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={() => (
          <>
            <Pressable
              onPress={() => {
                navigation.navigate('New Group');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                paddingHorizontal: 20,
              }}>
              <MaterialIcons
                name="group"
                size={24}
                color="royalblue"
                style={{
                  marginRight: 20,
                  backgroundColor: 'gainsboro',
                  padding: 7,
                  borderRadius: 20,
                  overflow: 'hidden',
                }}
              />
              <Text style={{color: 'royalblue', fontSize: 16}}>New Group</Text>
            </Pressable>
          </>
        )}
      />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  page: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});
