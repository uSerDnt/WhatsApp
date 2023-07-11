import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {onCreatePost, onCreateNotification} from '../../graphql/subscriptions';
import BellItem from '../../components/BellItem/BellItem';

const BellScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const postSubscription = API.graphql(
      graphqlOperation(onCreatePost),
    ).subscribe({
      next: eventData => {
        const newPost = eventData.value.data.onCreatePost;
        setNotifications(prevNotifications => [
          ...prevNotifications,
          {type: 'post', data: newPost},
        ]);
      },
    });

    const notificationSubscription = API.graphql(
      graphqlOperation(onCreateNotification),
    ).subscribe({
      next: eventData => {
        const newNotification = eventData.value.data.onCreateNotification;
        setNotifications(prevNotifications => [
          ...prevNotifications,
          {type: 'notification', data: newNotification},
        ]);
      },
    });

    return () => {
      postSubscription.unsubscribe();
      notificationSubscription.unsubscribe();
    };
  }, []);

  const sortedNotifications = notifications.slice().reverse(); // Đảo ngược thứ tự của mảng notifications

  return (
    <View>
      <FlatList
        data={sortedNotifications}
        renderItem={({item}) => <BellItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default BellScreen;
