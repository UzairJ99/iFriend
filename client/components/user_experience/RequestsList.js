import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    Text,
    ListItem,
    Avatar,
    Icon,
    Badge,
    ListItemProps,
    Button,
    Switch,
    colors
} from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../src/firebase/firebaseConfig';

const RequestsList = (props) => {
      
    const list2 = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
          subtitle: 'Vice President',
          linearGradientColors: ['#FF9800', '#F44336'],
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
          subtitle: 'Vice Chairman',
          linearGradientColors: ['#3F51B5', '#2196F3'],
        }
    ];

  return (
    <>
        <View style={styles.list}>
            {list2.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <Avatar rounded source={{ uri: l.avatar_url }} />
                    <ListItem.Content>
                        <ListItem.Title style={{ color: '#73B4DE' }}>
                        {l.name}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content right>
                        <Icon name="check-circle" type="font-awesome" color="#73B4DE" />
                        <Icon name="close" type="font-awesome" color="#73B4DE" />
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#96B9D0'
  },
});

export default RequestsList;
