import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// components
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import UserInputsPage from './components/auth/UserInputsPage';

const Stack = createNativeStackNavigator();

export default function App() {

  // applicaton state to keep track of whether a user is signed in or not
  const [user, setUser] = useState(null);

  // state for whether the page is loading or not
  const [loading, setLoading] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {
        // check if user is logged in, otherwise redirect them to the login and register screens
        user ? (
          <Stack.Screen 
            name="UserInputsPage" 
            component={UserInputsPage}
            options={{ headerShown: false }}
          />
        ) : (
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
