import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
// import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';
import {Platform} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getChatRoom, listMessagesByChatRoom} from '../graphql/queries';
import {onCreateMessage, onUpdateChatRoom} from '../graphql/subscriptions';
import Feather from 'react-native-vector-icons/Feather';
const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const chatroomID = route.params.id;
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  //fetch chatRoom
  useEffect(() => {
    API.graphql(graphqlOperation(getChatRoom, {id: chatroomID})).then(result =>
      setChatRoom(result.data?.getChatRoom),
    );
    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom, {filter: {id: {eq: chatroomID}}}),
    ).subscribe({
      next: ({value}) => {
        setChatRoom(cr => ({
          ...(cr || {}),
          ...value.data.onUpdateChatRoom,
        }));
      },
      error: err => console.warn(err),
    });

    return () => subscription.unsubscribe();
  }, [chatroomID]);
  //fetch messages
  useEffect(() => {
    API.graphql(
      graphqlOperation(listMessagesByChatRoom, {
        chatroomID,
        sortDirection: 'DESC',
      }),
    ).then(result => {
      setMessages(result.data?.listMessagesByChatRoom?.items);
    });
    //sub to create messs
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage, {
        filter: {chatroomID: {eq: chatroomID}},
      }),
    ).subscribe({
      next: ({value}) => {
        setMessages(m => [value.data.onCreateMessage, ...m]);
      },
      error: err => console.warn(err),
    });
    return () => subscription.unsubscribe();
  }, [chatroomID]);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
      headerRight: () => (
        <Feather
          onPress={() => navigation.navigate('Group Info', {id: chatroomID})}
          name="more-vertical"
          size={24}
          color="gray"
        />
      ),
    });
  }, [route.params.name, chatroomID]);
  if (!chatRoom) {
    return <ActivityIndicator />;
  }
  // console.log(JSON.stringify(chatRoom));
  return (
    <KeyboardAvoidingView style={[styles.bg, {paddingBottom: 40}]}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item} />}
          style={styles.list}
          inverted //render duoi len
        />
        <InputBox chatroom={chatRoom} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
