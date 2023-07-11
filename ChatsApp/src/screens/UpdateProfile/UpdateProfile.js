import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {v4 as uuidv4} from 'uuid';
var ImagePicker = require('react-native-image-picker');
import {S3Image} from 'aws-amplify-react-native/dist/Storage';
import {updateUser} from './mution';
import {getUser} from '../../graphql/queries';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth, Storage} from 'aws-amplify';
import {RadioButton} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState('Male');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const insets = useSafeAreaInsets();
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  // Hàm mở DatePicker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Hàm đóng DatePicker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Hàm xử lý ngày được chọn
  const handleDateConfirm = date => {
    const formattedDate = date.toLocaleDateString('en-GB'); // Lưu ngày dạng "dd/mm/yyyy"
    setDateOfBirth(formattedDate);
    hideDatePicker();
  };
  const onGenderChange = selectedGender => {
    setGender(selectedGender);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const userId = userData?.attributes?.sub;

        if (!userId) {
          console.log('User ID not found');
          return;
        }

        const response = await API.graphql(
          graphqlOperation(getUser, {id: userId}),
        );
        const dbUser = response.data?.getUser;

        setUser(dbUser);
        setName(dbUser?.name);
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

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
            setImage(response.assets[0].uri);
          } else {
            setImage(response.uri);
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
        },
      });
      return key;
    } catch (err) {
      console.log('Error uploading file:', err);
    }
  };

  const onUpdate = async () => {
    try {
      let imageKey;
      if (image) {
        imageKey = await uploadFile(image);
      }
      const [day, month, year] = dateOfBirth.split('/');
      const formattedDate = `${day.padStart(2, '0')}/${month.padStart(
        2,
        '0',
      )}/${year}`;
      await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: user.id,
            name,
            image: imageKey || user.image,
            gender: gender === 'Male' ? 'Male' : 'Female',
            birthday: formattedDate,
            _version: user._version,
          },
        }),
      );
    } catch (error) {
      console.log('Error updating user:', error);
    }
  };

  const onSave = async () => {
    if (user) {
      await onUpdate();
    }
    navigation.navigate('Profile');
  };

  let renderImage = <Image source={{uri: dummy_img}} style={styles.image} />;
  if (image) {
    renderImage = <Image source={{uri: image}} style={styles.image} />;
  } else if (user?.image) {
    renderImage = <S3Image imgKey={user.image} style={styles.image} />;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={[styles.container, {marginBottom: insets.bottom}]}
      contentContainerStyle={{flex: 1}}
      keyboardVerticalOffset={150}>
      <Pressable onPress={pickImage} style={styles.imagePickerContainer}>
        {renderImage}
        <Text style={styles.label}>Change photo</Text>
      </Pressable>
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.label}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.genderContainer}>
        <Text style={styles.label}>Gender:</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="Male"
            status={gender === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => onGenderChange('Male')}
          />
          <Text style={styles.label}>Male</Text>
          <RadioButton
            value="Female"
            status={gender === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => onGenderChange('Female')}
          />
          <Text style={styles.label}>Female</Text>
        </View>
      </View>

      <View style={styles.dateOfBirthContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.label}>Date of Birth: </Text>
          {dateOfBirth ? (
            <Text style={styles.label}>{dateOfBirth}</Text>
          ) : (
            <Text style={styles.label}>{user?.birthday}</Text>
          )}
        </View>
        <View>
          <FontAwesome
            size={24}
            name="edit"
            color={'black'}
            onPress={showDatePicker}
          />
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onSave} title="Save" disabled={!name} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  imagePickerContainer: {
    alignItems: 'center',
  },
  image: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 500,
  },
  input: {
    borderColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    marginRight: 10,
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateOfBirthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    marginBottom: 5,
  },
});

export default UpdateProfile;
