import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listFriends} from '../../graphql/queries';
import FriendItem from '../../components/FriendItem/FriendItem';
import {onUpdateFriend} from '../../graphql/subscriptions';
const FriendsScreen = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [friendUser, setFriendUser] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const fetchFriends = async () => {
    setLoading(true);
    const user = await Auth.currentAuthenticatedUser();
    const response = await API.graphql(
      graphqlOperation(listFriends, {
        filter: {
          or: [
            {requesterID: {eq: user.attributes.sub}},
            {requesteeID: {eq: user.attributes.sub}},
          ],
          status: {eq: 'ACCEPTED'},
        },
      }),
    );
    const friends = response.data.listFriends.items.filter(
      item => !item._deleted,
    );
    setFilteredUsers(friends);
    setLoading(false);
  };
  useEffect(() => {
    fetchFriends();
  }, []);

  const handleClickFriendRequest = () => {
    navigation.navigate('FriendRequest');
  };
  const handleClickSearch = () => {
    navigation.navigate('SearchFriend');
  };
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.searchInput} onPress={handleClickSearch}>
        <MaterialCommunityIcons size={30} name="account-search" color="blue" />
        <Text style={{paddingLeft: 10, color: 'black'}}>Search Friend</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchInput}
        onPress={handleClickFriendRequest}>
        <FontAwesome5 size={20} name="user-friends" color="blue" />
        <Text style={{paddingLeft: 10, color: 'black'}}>Friend request</Text>
      </TouchableOpacity>

      <View style={{paddingVertical: 10}}>
        <Text>List Friends</Text>
      </View>
      <FlatList
        data={filteredUsers}
        renderItem={({item}) => <FriendItem user={item} />}
        keyExtractor={item => item.id}
        refreshing={loading}
        onRefresh={fetchFriends}
      />
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    height: 40,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
  },
  page: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});
