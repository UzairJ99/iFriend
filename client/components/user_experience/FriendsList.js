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

const FriendsList = (props) => {
      
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
        },
        {
          name: 'Amanda Martin',
          avatar_url: 'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
          subtitle: 'CEO',
          linearGradientColors: ['#FFD600', '#FF9800'],
        },
        {
          name: 'Christy Thomas',
          avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
          subtitle: 'Lead Developer',
          linearGradientColors: ['#4CAF50', '#8BC34A'],
        },
        {
          name: 'Melissa Jones',
          avatar_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
          subtitle: 'CTO',
          linearGradientColors: ['#F44336', '#E91E63'],
        },
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
                    {/* <ListItem.Content right>
                        <ListItem.Title right style={{ color: '#73B4DE' }}>
                        11:00 am
                        </ListItem.Title>
                        <ListItem.Subtitle right>12:00 am</ListItem.Subtitle>
                    </ListItem.Content> */}
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

export default FriendsList;
