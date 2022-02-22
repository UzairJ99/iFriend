import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

const SettingsPage = (props) => {
    const [firstname, setFirstName] = useState(props.route.params.userInfo.firstname);
    const [lastname, setLastName] = useState(props.route.params.userInfo.lastname);
    const [email, setEmail] = useState(props.route.params.userInfo.email);
    const [username, setUserName] = useState(props.route.params.userInfo.username);
    const [school, setSchool] = useState(props.route.params.userInfo.schoolname);

    // console.log(props)
    const name = props.route.params.userInfo.username
    const saveChangesBtnAlert = () =>
        Alert.alert(
        "Save Changes",
        "This will save all changes. Your profile will be updated with the new changes.",
        [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            { 
                text: "OK", 
                onPress: () => {}, 
                style: "destructive"
            }
        ]
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 20}}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>Hello, {name}!</Text>
            <Image
                style={{width: 150, height: 150, borderRadius: 75}} 
                source={require('../../assets/user_icon.png')}
            />
            <Input
                placeholder="Firstname"
                clearButtonMode='always'
                value={firstname}
                onChangeText={setFirstName}
            />
            <Input
                placeholder="Lastname"
                clearButtonMode='always'
                value={lastname}
                onChangeText={setLastName}
            />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                disabled='true'
            />
            <Input
                placeholder="Username"
                clearButtonMode='always'
                value={username}
                onChangeText={setUserName}
            />
            <Input
                placeholder="School"
                clearButtonMode='always'
                value={school}
                onChangeText={setSchool}
            />
            <Input
                rightIcon={{ type: 'font-awesome', name: 'toggle-on', color: 'green', size: 35 }}
                value={'Allow others to find you'}
                disabled= 'true'
                onChangeText={setSchool}
            />
            <Input
                rightIcon={{ type: 'font-awesome', name: 'toggle-on', color: 'green', size: 35 }}
                value={'Allow push notifications'}
                disabled= 'true'
                onChangeText={setSchool}
            />
            <Button
                title="Save Changes"
                raised={true}
                buttonStyle={styles.saveChangesBtn}
                containerStyle={{ borderRadius: 15 }}
                onPress={() => saveChangesBtnAlert()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    saveChangesBtn: {
      fontSize: 30,
      height: 62,
      width: 300,
      borderRadius: 15,
      backgroundColor: '#73B4DE'
    }
  });
  
export default SettingsPage;
