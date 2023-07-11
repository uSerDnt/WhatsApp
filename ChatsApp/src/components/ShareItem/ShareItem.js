import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getUser, listLikesByPost} from '../../graphql/queries';
import Entypo from 'react-native-vector-icons/Entypo';
import {S3Image} from 'aws-amplify-react-native';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
import {
  createLike,
  deleteLike,
  createShare,
  createPost,
} from '../../graphql/mutations';
import {DataStore} from '@aws-amplify/datastore';
const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const ShareItem = ({share}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.post}>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate('Profile', {id: user?.id})}>
        {share?.user?.image ? (
          <S3Image imgKey={share.user.image} style={styles.profileImage} />
        ) : (
          <Image source={{uri: dummy_img}} style={styles.profileImage} />
        )}
        <View>
          <Text style={styles.name}>{share?.user?.name}</Text>
          <Text style={styles.subtitle}>
            {dayjs(share.createdAt).fromNow(true)}
          </Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.description}>{share?.Content}</Text>
      <View style={styles.headerShare}>
        {share?.post.User.image ? (
          <S3Image
            imgKey={share?.post?.User.image}
            style={styles.profileImage}
          />
        ) : (
          <Image source={{uri: dummy_img}} style={styles.profileImage} />
        )}
        <View>
          <Text style={styles.name}>{share?.post?.User.name}</Text>
          <Text style={styles.subtitle}>
            {dayjs(share?.post?.User.createdAt).fromNow(true)}
          </Text>
        </View>
      </View>
      <Text style={styles.contentShare}>{share?.post?.content}</Text>
      {share?.post.image && (
        <S3Image
          imgKey={share?.post.image}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

export default ShareItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  post: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  headerShare: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: 'green',
    borderBottomWidth: 0,
    marginHorizontal: 10,
  },
  name: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
  //body
  description: {
    padding: 10,
    lineHeight: 20,
  },
  contentShare: {
    padding: 10,
    lineHeight: 20,
    marginLeft: 20,
  },
  bodyImage: {
    width: '100%',
    aspectRatio: 1, //width=height
  },
  footer: {
    paddingHorizontal: 30,
  },
  starsRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  like: {
    color: 'gray',
  },
  share: {
    color: 'gray',
    marginLeft: 'auto',
  },
  buttonRows: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  share: {
    marginLeft: 5,
    color: 'gray',
  },
  alertContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  shareButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
