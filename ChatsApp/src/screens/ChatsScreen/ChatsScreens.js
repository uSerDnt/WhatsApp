import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import chats from '../../../assets/data/chats.json';
import ChatListItem from '../../components/ChatListItem';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listChatRooms} from './queries';
const ChatsScreens = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const fetchChatRooms = async () => {
    setLoading(true);
    const authUser = await Auth.currentAuthenticatedUser();

    const response = await API.graphql(
      graphqlOperation(listChatRooms, {id: authUser.attributes.sub}),
    );

    const rooms = response?.data?.getUser?.ChatRooms?.items;
    const filteredRooms = rooms.filter(item => !item._deleted);
    const sortedRooms = filteredRooms.sort(
      (r1, r2) =>
        new Date(r2.chatRoom.updatedAt) - new Date(r1.chatRoom.updatedAt),
    );

    setChatRooms(sortedRooms);
    setLoading(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      setCurrentUser(authUser.attributes.sub);
    };
    fetchUser();
    fetchChatRooms();
  }, []);
  console.log('chatroom', chatRooms);
  return (
    <FlatList
      data={chatRooms}
      renderItem={({item}) => (
        <ChatListItem
          currentUser={currentUser}
          chat={item.chatRoom}
          version={item._version}
        />
      )}
      style={{backgroundColor: 'white'}}
      refreshing={loading}
      onRefresh={fetchChatRooms}
    />
  );
};

export default ChatsScreens;

const styles = StyleSheet.create({});
