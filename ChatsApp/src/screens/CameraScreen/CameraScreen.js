import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera, ViewPropTypes} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var ImagePicker = require('react-native-image-picker');
const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();
  const [files, setFiles] = useState([]);
  const navigation = useNavigation();

  const pickImage = () => {
    // No permissions request is necessary for launching the image library
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'video',
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
  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      navigation.navigate('Create Video', {videoUri: data.uri});
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
        style={styles.preview}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={pickImage} style={styles.icon}>
          <FontAwesome name="file-video-o" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onRecord}
          style={isRecording ? styles.buttonStop : styles.buttonRecord}
        />
        <TouchableOpacity onPress={pickImage} style={styles.icon}>
          <MaterialIcons name="flip-camera-android" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonRecord: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff4343',
  },
  buttonStop: {
    alignSelf: 'center',
    marginVertical: 20,
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: '#ff4343',
  },
  icon: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
