import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input } from 'react-native-elements';

// testing home screen component for navigation stack
function UserInputsPage(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.loginForm}>
        <Text style={styles.logo}>iFriend</Text>
        <Button
          title="Next"
          raised={true}
          buttonStyle={styles.nextBtn}
          containerStyle={{ borderRadius: 15, marginTop: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupBtn: {
    fontSize: 30,
    height: 62,
    width: 180,
    borderRadius: 15,
    backgroundColor: '#73B4DE'
  },
  nextBtn: {
    fontSize: 30,
    height: 62,
    width: 300,
    borderRadius: 15,
    backgroundColor: '#73B4DE'
  },
  logo: {
    margin: 20,
    fontSize: 70,
    color: '#73B4DE'
  },
  loginForm: {
    flex: 3,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 50
  }
});

export default UserInputsPage;
