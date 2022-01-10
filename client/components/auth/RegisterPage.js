import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input } from 'react-native-elements';

// testing home screen component for navigation stack
function RegisterPage(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.loginForm}>
        <Text style={styles.logo}>Sign up for iFriend</Text>
        <Input
          placeholder="Name"
        />
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Username"
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <Button
          title="Sign Up"
          raised={true}
          buttonStyle={styles.signupBtn}
          containerStyle={{ borderRadius: 15, marginTop: 20 }}
        />
        <Text style={{ marginTop: 50, fontSize: 18 }}>Have an existing account?
          <Text style={{ color: 'blue' }} onPress={() => props.navigation.goBack()}> Sign in</Text>
        </Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  signupBtn: {
    fontSize: 30,
    height: 62,
    width: 300,
    borderRadius: 15,
    backgroundColor: '#2184C4'
  },
  logo: {
    fontSize: 30,
    marginBottom: 20,
    color: '#2184C4'
  },
  loginForm: {
    flex: 3,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 100
  }
});

export default RegisterPage;
