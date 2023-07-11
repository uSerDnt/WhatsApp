import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Notifications} from 'aws-amplify';

const DemoBell = () => {
  const [notificationHistory, setNotificationHistory] = useState([]);

  useEffect(() => {
    fetchNotificationHistory();
  }, []);

  const fetchNotificationHistory = async () => {
    try {
      const userId = '599ac57c-30d1-709b-b199-cc00b365bd2d'; // Thay thế 'ID_nguoi_dung' bằng ID thực của người dùng bạn muốn xem lịch sử thông báo của
      const limit = 10; // Số lượng thông báo muốn lấy (giới hạn)

      const response = await Notifications.getNotification({
        userId,
        limit,
      });

      setNotificationHistory(response);
    } catch (error) {
      console.error('Lỗi khi lấy lịch sử thông báo:', error);
    }
  };

  const renderNotificationItem = ({item}) => (
    <View style={styles.notificationItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationHistory}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  notificationItem: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
  },
};

export default DemoBell;
