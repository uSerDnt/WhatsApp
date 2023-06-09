import React, {useState, useEffect} from 'react';
import {FlatList, View, TextInput, StyleSheet, Button} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listUsers} from '../graphql/queries';
import {createChatRoom, createUserChatRoom} from '../graphql/mutations';

import {useNavigation, useRoute} from '@react-navigation/native';

const AddContactToGroup = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const chatRoom = route.params.chatRoom;
  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then(result => {
      setUsers(
        result.data?.listUsers?.items.filter(
          item =>
            !chatRoom.users.items.some(
              chatRoomUser =>
                !chatRoomUser._deleted && item.id === chatRoomUser.userId,
            ),
        ),
      );
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="ADD TO GROUP"
          disabled={selectedUserIds.length < 1}
          onPress={onAddToGroupPress}
        />
      ),
    });
  }, [selectedUserIds]);

  const onAddToGroupPress = async () => {
    // Create a new Chatroom
    // const newChatRoomData = await API.graphql(
    //   graphqlOperation(createChatRoom, {input: {}}),
    // );
    // if (!newChatRoomData.data?.createChatRoom) {
    //   console.log('Error creating the chat error');
    // }
    // const newChatRoom = newChatRoomData.data?.createChatRoom;

    // Add the selected users to the ChatRoom

    await Promise.all(
      selectedUserIds.map(userId =>
        API.graphql(
          graphqlOperation(createUserChatRoom, {
            input: {chatRoomId: chatRoom.id, userId},
          }),
        ),
      ),
    );

    // Add the auth user to the ChatRoom
    // const authUser = await Auth.currentAuthenticatedUser();
    // await API.graphql(
    //   graphqlOperation(createUserChatRoom, {
    //     input: {chatRoomId: newChatRoom.id, userId: authUser.attributes.sub},
    //   }),
    // );

    // setSelectedUserIds([]);

    // navigate to the newly created ChatRoom
    navigation.goBack();
  };

  const onContactPress = id => {
    setSelectedUserIds(userIds => {
      if (userIds.includes(id)) {
        // remove id from selected
        return [...userIds].filter(uid => uid !== id);
      } else {
        // add id to selected
        return [...userIds, id];
      }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ContactListItem
            user={item}
            selectable
            onPress={() => onContactPress(item.id)}
            isSelected={selectedUserIds.includes(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    padding: 10,
    margin: 10,
  },
});

export default AddContactToGroup;
