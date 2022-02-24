import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

// the user id and email would never change, so we can use it for querying purposes and for initial displays
const SettingsPage = (props) => {
    const [firstname, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(props.route.params.userInfo.email);
    const [username, setUserName] = useState(null);
    const [schoolname, setSchoolName] = useState(null);

    useEffect(() => {
        firebase.firestore().collection('users').doc(`${props.route.params.userInfo.id}`).get()
        .then(documentSnapshot => {
            // console.log('User exists: ', documentSnapshot.exists);
            if (documentSnapshot.exists) {
                const userData = documentSnapshot.data();
                console.log('User data: ', userData);
                setFirstName(userData.firstname);
                setLastName(userData.lastname);
                setUserName(userData.username);
                setSchoolName(userData.schoolname);
            }
            else { 
                console.log('This user does not exist in the database');
            }
        }).catch((error) => {
            console.log('There was an error while trying to read from the database');
            return (
                <>/</>
            )
        });
    }, []);

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
                onPress: () => firebase.firestore().collection('users').doc(`${props.route.params.userInfo.id}`).update({
                    firstname: firstname,
                    lastname: lastname, 
                    username: username, 
                    schoolname: schoolname
                }).then(() => {
                    console.log(`updated details for the user with email ${props.route.params.userInfo.email}`);
                }), 
                style: "destructive"
            }
        ]
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 20}}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>Hello, {firstname}!</Text>
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
                placeholder="Schoolname"
                clearButtonMode='always'
                value={schoolname}
                onChangeText={setSchoolName}
            />
            <Input
                rightIcon={{ type: 'font-awesome', name: 'toggle-on', color: 'green', size: 35 }}
                value={'Allow others to find you'}
                disabled= 'true'
            />
            <Input
                rightIcon={{ type: 'font-awesome', name: 'toggle-on', color: 'green', size: 35 }}
                value={'Allow push notifications'}
                disabled= 'true'
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
