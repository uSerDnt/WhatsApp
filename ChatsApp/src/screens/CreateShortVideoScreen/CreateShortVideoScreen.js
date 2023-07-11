import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import {Storage, API, graphqlOperation, Auth} from 'aws-amplify';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getUser} from '../../graphql/queries';
import {createShortVideo} from '../../graphql/mutations';

const CreateShortVideoScreen = () => {
  const [description, setDescription] = useState('');
  const [videoKey, setVideoKey] = useState(null);
  const [user, setUser] = useState();
  const route = useRoute();
  const navigation = useNavigation();

  const uploadToStorage = async imagePath => {
    try {
      const response = await fetch(imagePath);

      const blob = await response.blob();

      const filename = `${uuidv4()}.mp4`;
      const s3Response = await Storage.put(filename, blob);

      setVideoKey(s3Response.key);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    uploadToStorage(route.params.videoUri);
  }, []);

  const onPublish = async () => {
    if (!videoKey) {
      console.warn('Video is not yet uploaded');
      return;
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const newPost = {
        input: {
          videoUri: videoKey,
          content: description,
          shortVideoUserId: userInfo.attributes.sub,
        },
      };
      const response = await API.graphql(
        graphqlOperation(createShortVideo, newPost),
      );
      navigation.navigate('Videos');
    } catch (e) {
      console.error('Error:', e); // Log any errors that occur
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder={'content'}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={onPublish}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateShortVideoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    margin: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#ff4747',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
