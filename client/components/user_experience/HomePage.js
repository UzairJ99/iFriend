import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input, Card } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';

const HomePage = (props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={{margin: 10}}>WE'RE HERE TO HELP</Text>
                {/* <Text>Hello, {JSON.stringify(props.userInfo.username)}. Your email is, {JSON.stringify(props.userInfo.email)}</Text> */}
                <Text style={{fontSize: 25, fontWeight: "bold"}}>How Does iFriend Work?</Text>
                
            </View>
            <View
                style={{
                    flex: 5
                }}
            >
                <Text style={styles.steps}>1. Setup your account on the app.</Text>
                <Text style={styles.steps}>2. Enable the keychain and keep it with you at all times.</Text>
                <Text style={styles.steps}>3. Your keychain will blink if it detects someone nearby with similar interests. A notification will be sent to your mobile device.</Text>
                <Text style={styles.steps}>4. You then have the option to connect with a potential friend.</Text>
                <Text style={styles.steps}>5. Find your friend nearby and start a conversation! </Text>
                <View style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <Card style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: "bold", margin: 10, textAlign: 'center'}}>Still Need Assistance?</Text>
                        <Text style={{fontSize: 17, marginTop: 5, textAlign: 'center'}}>Contact iFriend Support</Text>
                        <Button
                            title="Get Started"
                            raised={true}
                            buttonStyle={styles.loginBtn}
                            containerStyle={{ borderRadius: 15, width: 100, textAlign: 'center'}}
                        />
                    </Card>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    steps: {
        fontSize: 17,
        padding: 10,
        marginLeft: 20,
        marginRight: 20
    },
    loginBtn: {
        fontSize: 20,
        height: 42,
        borderRadius: 15,
        width: 200,
        backgroundColor: '#73B4DE'
    }
});

export default HomePage
