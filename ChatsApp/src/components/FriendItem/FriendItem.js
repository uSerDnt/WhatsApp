import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
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
const FriendItem = ({user}) => {
  const navigation = useNavigation();

  const [friendUser, setFriendUser] = useState(null);

  const fetchFriendUser = async () => {
    try {
      const userId = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(getUser, {id: user.requesteeID}),
      );
      let userData = response.data.getUser;
      if (user.requesteeID === userId?.attributes?.sub) {
        const requesterResponse = await API.graphql(
          graphqlOperation(getUser, {id: user.requesterID}),
        );
        const requesterUserData = requesterResponse.data.getUser;
        userData = requesterUserData;
      }
      setFriendUser(userData);
    } catch (error) {
      console.log('Error retrieving friend user:', error);
    }
  };

  useEffect(() => {
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
        <Text numberOfLines={2} style={styles.subTitle}>
          {friendUser.status}
        </Text>
      </View>
    </View>
  );
};

export default FriendItem;

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
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    color: 'gray',
  },
});
