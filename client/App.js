import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './src/firebase/firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// auth components
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import UserInputsPage from './components/auth/UserInputsPage';
// user experience components
import ConnectionsPage from './components/user_experience/ConnectionsPage';
import HomePage from './components/user_experience/HomePage';
import InterestsPage from './components/user_experience/InterestsPage';
import SettingsPage from './components/user_experience/SettingsPage';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Base(props) {
  // we need to temporarily store the user info, to prevent overriding the value
  // it would not work if tried to access it by doing userInfo={props.userInfo}
  // this might be because we enter the tab.navigator and react assumes we have entered another screen, so the props gets refreshed?? 
  const tempUserInfo = props.userInfo;
  return (
    <BottomTab.Navigator screenOptions={
      ({ route }) => ({
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Settings', {userInfo: tempUserInfo})}>
              <Image
                style={{width: 40, height: 40, borderRadius: 20, margin: 10, marginBottom: 18}} 
                source={require('./assets/user_icon.png')}
              />
            </TouchableOpacity>
          )
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'iFriends') {
            icon = focused ? 'ios-people' : 'ios-people-outline';
          } else if (route.name === 'Interests') {
            icon = focused ? 'ios-add' : 'ios-add-outline';
          }
          return <Ionicons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#73B4DE',
        tabBarInactiveTintColor: 'gray',

        // configure header 
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontWeight: 'normal',
          fontFamily: 'Helvetica-Light',
          fontSize: 35,
          color: 'black',
          textAlign: 'justify'
        },
        headerTitleAlign: 'left',
        headerStatusBarHeight: 70
      })}>
      <BottomTab.Screen
        name="Home"
      >{props => <HomePage {...props} userInfo={tempUserInfo} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="iFriends"
      >{props => <ConnectionsPage {...props} userInfo={tempUserInfo} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Interests"
        options={({ title: "Interests" })}
      >{props => <InterestsPage {...props} userInfo={tempUserInfo} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

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
            <Stack.Group>
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
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="Base"
                options={{ headerShown: false }}
              >{props => <Base {...props} userInfo={user} />}
              </Stack.Screen>
              <Stack.Screen
                name="Settings"
                component={SettingsPage}
               // options={{ headerShown: false }}
              />
            </Stack.Group>
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
