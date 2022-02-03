import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// user experience components
import ConnectionsPage from './ConnectionsPage';
import HomePage from './HomePage';
import InterestsPage from './InterestsPage';
import SettingsPage from './SettingsPage';

const Tab = createBottomTabNavigator();

function Base(props) {
    // we need to temporarily store the user info, to prevent overriding the value i think 
    // would not work if tried to access it by doing userInfo={props.userInfo}
    const tempUserInfo = props.userInfo;
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomePage"
                options={{ headerShown: false }}
            >{props => <HomePage {...props} userInfo={tempUserInfo} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default Base 