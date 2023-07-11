import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Image,
  Text,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API, graphqlOperation, Auth, Storage} from 'aws-amplify';
import {
  createMessage,
  updateChatRoom,
  createAttachment,
} from '../../graphql/mutations';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
var ImagePicker = require('react-native-image-picker');
import EmojiSelector from 'react-native-emoji-selector';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const InputBox = ({chatroom}) => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [progresses, setProgresses] = useState({});
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState('auto');
  const handleSend = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    const newMessage = {
      chatroomID: chatroom.id,
      text,
      userID: authUser.attributes.sub,
    };

    const newMessageData = await API.graphql(
      graphqlOperation(createMessage, {input: newMessage}),
    );

    setText('');
    //create attachment
    await Promise.all(
      files.map(file =>
        addAttachment(file, newMessageData.data.createMessage.id),
      ),
    );
    setFiles([]);
    // set the new message as LastMessage of the ChatRoom
    await API.graphql(
      graphqlOperation(updateChatRoom, {
        input: {
          _version: chatroom._version,
          chatRoomLastMessageId: newMessageData.data.createMessage.id,
          id: chatroom.id,
        },
      }),
    );
  };

  const addAttachment = async (file, messageID) => {
    let type;
    if (file.type.includes('image')) {
      type = 'IMAGE';
    } else if (file.type.includes('video')) {
      type = 'VIDEO';
    } else {
      throw new Error('Unsupported file type');
    }
    console.log('type', type);
    const newAttachment = {
      storageKey: await uploadFile(file.uri),
      type,
      width: file.width,
      height: file.height,
      duration: file.duration,
      messageID,
      chatroomID: chatroom.id,
    };
    console.log(newAttachment);
    console.log(newAttachment);
    return API.graphql(
      graphqlOperation(createAttachment, {input: newAttachment}),
    );
  };

  const pickImage = () => {
    // No permissions request is necessary for launching the image library
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'mixed',
        selectionLimit: 10,
        quality: 1,
        multiple: true,
      },
      response => {
        if (!response.didCancel) {
          if (Array.isArray(response.assets)) {
            setFiles(response.assets);
          } else {
            setFiles([response]);
          }
        }
      },
    );
  };

  const uploadFile = async fileUri => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: 'image/png',
        progressCallback: progress => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setProgresses(p => ({
            ...p,
            [fileUri]: progress.loaded / progress.total,
          }));
        },
      });
      return key;
    } catch (err) {
      console.log('error upload file', err);
    }
  };

  return (
    <>
      {files.length > 0 && (
        <View style={styles.attachmentsContainer}>
          <FlatList
            data={files}
            horizontal
            renderItem={({item}) => (
              <>
                <Image
                  source={{uri: item.uri}}
                  style={styles.selectedImage}
                  resizeMode="contain"
                />
                {progresses[item.uri] && (
                  <View
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      backgroundColor: '#8c8c8cAA',
                      padding: 5,
                      borderRadius: 50,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {(progresses[item.uri] * 100).toFixed(0)} %
                    </Text>
                  </View>
                )}
                <MaterialIcons
                  name="highlight-remove"
                  onPress={() =>
                    setFiles(existingFiles =>
                      existingFiles.filter(file => file !== item),
                    )
                  }
                  size={20}
                  color="gray"
                  style={styles.removeSelectedImage}
                />
              </>
            )}
          />
        </View>
      )}
      {isEmojiPickerOpen && (
        <EmojiSelector
          onEmojiSelected={emoji =>
            setText(currentMessage => currentMessage + emoji)
          }
          columns={8}
        />
      )}
      <SafeAreaView
        edges={['bottom']}
        style={[styles.container, {height: containerHeight}]}>
        <Pressable
          onPress={() => setIsEmojiPickerOpen(currentValue => !currentValue)}>
          <SimpleLineIcons
            name="emotsmile"
            size={30}
            color="black"
            style={styles.icon}
          />
        </Pressable>
        <MaterialCommunityIcons
          // name={recording ? 'microphone' : 'microphone-outline'}
          name="microphone"
          size={30}
          // color={recording ? 'red' : '#595959'}
          style={styles.icon}
        />
        <AntDesign
          onPress={pickImage}
          name="plus"
          size={30}
          color="royalblue"
        />
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="text your messages ..."
          multiline //xuong dong
        />
        <MaterialIcons
          onPress={handleSend}
          style={styles.send}
          name="send"
          size={16}
          color="white"
        />
      </SafeAreaView>
    </>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
  attachmentsContainer: {
    alignItems: 'flex-end',
  },
  selectedImage: {
    height: 100,
    width: 200,
    margin: 5,
  },
  removeSelectedImage: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  icon: {
    marginHorizontal: 5,
  },
  root: {
    padding: 10,
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
