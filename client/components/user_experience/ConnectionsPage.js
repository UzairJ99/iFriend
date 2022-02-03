import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Tab, TabView } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

const ConnectionsPage = (props) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#96B9D0',
          height: 3,
        }}
        variant="primary"
        containerStyle={{backgroundColor: 'white', marginTop: 10}}
      >
        <Tab.Item
          title="Requests"
          titleStyle={{ fontSize: 12, color: 'black' }}
          icon={{ name: 'ios-people', type: 'ionicon', color: '#96B9D0' }}
          containerStyle={{backgroundColor: 'white', height: 80, paddingTop: 10 }}
        />
        <Tab.Item
          title="iFriends"
          titleStyle={{ fontSize: 12, color: 'black' }}
          icon={{ name: 'list', type: 'ionicon', color: '#96B9D0' }}
          containerStyle={{backgroundColor: 'white', height: 80, paddingTop: 10 }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Requests</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>iFriends</Text>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#96B9D0'
  },
});

export default ConnectionsPage;
