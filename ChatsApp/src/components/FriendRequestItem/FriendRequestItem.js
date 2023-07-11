import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
dayjs.extend(relativeTime);
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getUser} from '../../graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
import {updateFriend, deleteFriend} from '../../graphql/mutations';
const FriendRequestItem = ({user}) => {
  const navigation = useNavigation();
  const [friendUser, setFriendUser] = useState(null);

  const handleAdd = async () => {
    try {
      await API.graphql(
        graphqlOperation(updateFriend, {
          input: {
            id: user.id,
            status: 'ACCEPTED',
            _version: user._version,
          },
        }),
      );

      navigation.goBack();
    } catch (error) {
      console.log('Error updating friend:', error);
    }
  };
  const handleDelete = async () => {
    try {
      // console.log('Input:', {_version: user._version, id: user.id});
      await API.graphql(
        graphqlOperation(deleteFriend, {
          input: {_version: user._version, id: user.id},
        }),
      );

      setFriendUser(prevFriends => {
        if (Array.isArray(prevFriends)) {
          return prevFriends.filter(item => item.id !== user.id);
        }
        return prevFriends;
      });

      console.log('Friend deleted successfully');
      navigation.goBack();
    } catch (error) {
      console.log('Error deleting friend:', error);
    }
  };

  useEffect(() => {
    const fetchFriendUser = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getUser, {id: user.requesterID}),
        );
        const userData = response.data.getUser;
        setFriendUser(userData);
      } catch (error) {
        console.log('Error retrieving friend user:', error);
      }
    };

    fetchFriendUser();
  }, [user]);

  if (!friendUser) {
    return null;
  }

  return (
    <View style={styles.container}>
      <S3Image imgKey={friendUser.image} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {friendUser.name}
        </Text>
        <Text>Đã gửi {dayjs(user.createdAt).format('DD/MM/YYYY')}</Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {friendUser.status}
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>ACCEPT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FriendRequestItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
