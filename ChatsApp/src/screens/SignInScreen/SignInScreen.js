import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/dnt.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {Voximplant} from 'react-native-voximplant';
import {APP_NAME, ACC_NAME} from '../Constant';
const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const voximplant = Voximplant.getInstance();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  // useEffect(() => {
  //   const connect = async () => {
  //     const status = await voximplant.getClientState();
  //     if (status === Voximplant.ClientState.DISCONNECTED) {
  //       await voximplant.connect();
  //     } else if (status === Voximplant.ClientState.LOGGED_IN) {
  //       redirectHome();
  //     }
  //   };

  //   connect();
  // }, []);

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      // const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
      // await voximplant.login(fqUsername, password);
      // console.log('Voximplant login successful');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };
  // const redirectHome = () => {
  //   navigation.reset({
  //     index: 0,
  //     routes: [
  //       {
  //         name: 'Constacts',
  //       },
  //     ],
  //   });
  // };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be mininum 3 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
