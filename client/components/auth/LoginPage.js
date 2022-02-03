import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

function LoginPage(props) {
  // states for the page
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Function to log in the user when they click the login button.
   * Checks with Firebase if the user exists and proceeds to navigate them to the user inputs page.
   * @returns {void}
   */
  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert("User does not exist")
              return;
            }
            const user = firestoreDocument.data()
            // pass the user info to the next page
            // since we are persisting the login details, there is probably no need for us to navigate to this page after the user logs in 
            // simply because the page would automatically get rendered after we actually successfully log in. 
            props.navigation.navigate('Base', user)
          })
          .catch(error => {
            alert(error)
          });
      })
      .catch(error => {
        alert(error)
      })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.loginForm}>
        <Text style={styles.logo}>iFriend</Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          raised={true}
          buttonStyle={styles.loginBtn}
          containerStyle={{ borderRadius: 15, marginTop: 20 }}
          onPress={() => onSubmit()}
        />
        <Text style={{ fontWeight: 'bold', marginTop: 70, marginBottom: 10, fontSize: 18 }}>Register an account</Text>
        <Button
          title="Register"
          raised={true}
          onPress={() => props.navigation.navigate('Register')}
          buttonStyle={styles.signupBtn}
          containerStyle={{ borderRadius: 15 }}
        />
        <Text style={{ color: 'blue', fontSize: 18, marginTop: 50, }}>Need help signing up? (FAQ)</Text>
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
  loginBtn: {
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

export default LoginPage;
