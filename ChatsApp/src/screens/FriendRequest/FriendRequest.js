import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {friendsByRequesteeID} from '../../graphql/queries';
import FriendRequestItem from '../../components/FriendRequestItem/FriendRequestItem';
const FriendRequest = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userId = user.attributes.sub;
        const response = await API.graphql(
          graphqlOperation(friendsByRequesteeID, {
            requesteeID: userId,
            filter: {
              status: {eq: 'PENDING'},
            },
          }),
        );
        const friends = response.data.friendsByRequesteeID.items.filter(
          item => !item._deleted,
        );
        setFilteredUsers(friends);
        console.log(friends);
      } catch (error) {
        console.log('Error retrieving friends:', error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={filteredUsers}
        renderItem={({item}) => <FriendRequestItem user={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FriendRequest;

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});
