import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getUser} from '../../graphql/queries';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
dayjs.extend(relativeTime);
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
const BellItem = ({item}) => {
  return (
    <View style={styles.container}>
      <S3Image imgKey={item?.data?.User?.image} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {item?.data?.User?.name} đã tạo bài viết mới
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          nội dung: {item?.data?.content}
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {dayjs(item?.data?.createdAt).fromNow(true)}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  notificationContainer: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    marginBottom: 16,
    padding: 12,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    color: 'gray',
  },
};

export default BellItem;
