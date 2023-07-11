import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useImperativeHandle, useState} from 'react';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
dayjs.extend(relativeTime);
import {onUpdateChatRoom} from '../../graphql/subscriptions';
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
const ChatListItem = ({chat, currentUser, version}, ref) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [chatRoom, setChatRoom] = useState(chat);

  useEffect(() => setChatRoom(chat), [chat]);
  useEffect(() => {
    const userItem =
      chatRoom.users.items &&
      chatRoom.users.items.find(item => item.user.id !== currentUser);

    setUser(userItem?.user);
  }, [currentUser, chatRoom]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom, {filter: {id: {eq: chat.id}}}),
    ).subscribe({
      next: ({value}) => {
        console.log('update', value);
        setChatRoom(cr => ({
          ...(cr || {}),
          ...value.data.onUpdateChatRoom,
        }));
      },
      error: err => console.warn(err),
    });

    return () => subscription.unsubscribe();
  }, [chat.id]);
  const handleClick = () => {
    navigation.navigate('Chat', {id: chatRoom.id, name: user?.name});
  };

  return (
    <TouchableOpacity onPress={handleClick} style={styles.container}>
      <S3Image imgKey={user?.image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chatRoom.name || user?.name}
          </Text>
          {chatRoom.LastMessage && (
            <Text style={styles.subTitle}>
              {dayjs(chatRoom.LastMessage?.createdAt).fromNow(true)}
            </Text>
          )}
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          {chatRoom.LastMessage?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.forwardRef(ChatListItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    color: 'gray',
  },
});
