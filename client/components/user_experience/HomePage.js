import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

const HomePage = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>HomePage</Text>
            <Text>Hello, {JSON.stringify(props.userInfo.username)}. Your email is, {JSON.stringify(props.userInfo.email)}</Text>
        </View>
    )
}
export default HomePage
