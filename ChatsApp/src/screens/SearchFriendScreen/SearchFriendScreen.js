import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {listUsers} from '../../graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
import {createFriend} from '../../graphql/mutations';
const FriendSearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [showFlatList, setShowFlatList] = useState(false);
  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then(result => {
      setUsers(result.data?.listUsers?.items);
    });
  }, []);

  useEffect(() => {
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredUsers(filteredData);

    if (searchTerm.trim() !== '') {
      setShowFlatList(true);
    } else {
      setShowFlatList(false);
    }
  }, [searchTerm, users]);
  const handleSearch = () => {};

  const handleAddFriend = async friend => {
    const currentUser = await Auth.currentAuthenticatedUser();
    const requesterID = currentUser.attributes.sub;

    const input = {
      requesterID,
      requesteeID: friend.id,
      status: 'PENDING',
    };

    await API.graphql(graphqlOperation(createFriend, {input}));
  };

  const renderItem = ({item}) => (
    <View style={styles.containeritem}>
      <S3Image imgKey={item?.image} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {item.status}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleAddFriend(item)}
        style={styles.addButton}>
        <Text style={styles.addButtonLabel}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <EvilIcons size={24} name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Friends"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      </View>
      {showFlatList && (
        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  containeritem: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: 'black',
  },
  searchInput: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default FriendSearchScreen;
