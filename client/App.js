import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebase } from './src/firebase/firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// auth components
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import UserInputsPage from './components/auth/UserInputsPage';
// user experience component
import { Base } from './components/user_experience/Base';

const Stack = createNativeStackNavigator();

export default function App() {

  // applicaton state to keep track of whether a user is signed in or not
  const [user, setUser] = useState(null);

  // state for whether the page is loading or not
  const [loading, setLoading] = useState(null);

  if (loading) {
    return (
      <></>
    )
  }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          // check if user is logged in, otherwise redirect them to the login and register screens
          !(user) ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterPage}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Base"
              options={{ headerShown: false }}
            >{props => <Base {...props} userInfo={user} />}
            </Stack.Screen>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
