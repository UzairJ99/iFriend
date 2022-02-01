import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

// testing home screen component for navigation stack
function RegisterPage(props) {
  // states for the page
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /**
   * Navigates the user to the login page.
   * @returns {void}
   */
  const goToLogin = () => {
    props.navigation.goBack();
  }

  /**
   * Function to register a user in Firebase. Checks if the information is valid and the passwords match.
   * Creates a user in Firebase and logs them in, otherwise raises an error.
   * @returns {void}
   */
  const submit = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          name,
        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            // pass the user info to the next page
            props.navigation.navigate('UserInputsPage', {user: data})
          })
          .catch((error) => {
            alert(error)
          });
      })
      .catch((error) => {
        alert(error)
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.loginForm}>
        <Text style={styles.logo}>Sign up for iFriend</Text>
        <Input
          placeholder="Name"
          value={name}
        />
        <Input
          placeholder="Email"
          // onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Username"
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          value={password}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
        />
        <Button
          title="Sign Up"
          raised={true}
          buttonStyle={styles.signupBtn}
          containerStyle={{ borderRadius: 15, marginTop: 20 }}
          onPress={() => submit()}
        />
        <Text style={{ marginTop: 50, fontSize: 18 }}>Have an existing account?
          <Text style={{ color: 'blue' }} onPress={goToLogin()}> Sign in</Text>
        </Text>
      </View>
    </View>
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
