import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {Auth} from 'aws-amplify';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
const ConfirmSignIn = () => {
  const route = useRoute();
  const {control, handleSubmit} = useForm({
    defaultValues: {username: route?.params?.username},
  });
  const navigation = useNavigation();
  const {username} = route.params;
  const onConfirmPressed = async data => {
    const {code} = data;
    try {
      await Auth.confirmSignIn(username, code);
      navigation.navigate('Chats');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm SignIn</Text>
        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmSignIn;
