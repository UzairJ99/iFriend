import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input } from 'react-native-elements';

// testing home screen component for navigation stack
function LoginPage(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <View style={styles.loginForm}>
        <Text style={styles.logo}>iFriend</Text>
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          raised={true}
          buttonStyle={styles.loginBtn}
          containerStyle={{borderRadius: 15, marginTop: 20}}
        />
      </View>
      
      <View style={{flex: 2}}>
        <Button
          title="Sign Up"
          raised={true}
          onPress={() => props.navigation.navigate('Register')}
          buttonStyle={styles.signupBtn}
          containerStyle={{borderRadius: 15}}
        />
        <Text style={{fontSize: 18, marginTop: 15}}>Need help signing up?</Text>
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
    backgroundColor: '#96B9D0'
  },
  loginBtn: {
    fontSize: 30,
    height: 62,
    width: 300,
    borderRadius: 15,
    backgroundColor: '#96B9D0'
  },
  logo: {
    flex: 1,
    fontSize: 70,
    color: '#96B9D0'
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

export default LoginPage;
