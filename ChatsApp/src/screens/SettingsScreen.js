import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';

const SettingsScreen = () => {
  const handleSignOut = () => {
    Auth.signOut();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={handleSignOut} title="Sign out" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
