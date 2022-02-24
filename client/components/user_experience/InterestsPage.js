import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from 'react-native-elements';
import { firebase } from '../../src/firebase/firebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';

// TODO 
// 1.) get list of interest, each section should have an already predifined list - done 
// 2.) implement minimal functionality for clear all and save all interests icon - done 
// 3.) implement user prompts for clear all and save all - done 
// 4.) update firebase after the clear all and save interests - done

const InterestsPage = (props) => {
    // Favorite Musical Artist 
    const [musicOpen, musicSetOpen] = useState(false);
    const [musicValue, musicSetValue] = useState(null);
    const [musicItems, musicSetItems] = useState([
        {label: 'Frank Ocean', value: 'frank'},
        {label: 'Summer Walker', value: 'summer'},
        {label: 'Rihanna', value: 'rihanna'},
        {label: 'Beyonce', value: 'beyonce'},
        {label: 'J Cole', value: 'jcole'},
        {label: 'Young Thug', value: 'youngthug'},
        {label: 'Drake', value: 'drake'},
        {label: 'Nicki Minaj', value: 'nickiminaj'},
        {label: 'Kendrick Lamar', value: 'kendrick'},
        {label: 'Mereba', value: 'mereba'},
        {label: 'JID', value: 'jid'},
        {label: 'Ari Lennox', value: 'arilennox'},
        {label: 'Earth Gang', value: 'earthgang'}
      ]); 
    const onMusicOpen = useCallback(() => {
        appSetOpen(false);
        bookSetOpen(false);
        careerSetOpen(false);
        destinationSetOpen(false);
        hobbySetOpen(false);
        movieSetOpen(false);
        zodiacSetOpen(false);
    }, []);

    // Favorite Movie/ TV show 
    const [movieOpen, movieSetOpen] = useState(false);
    const [movieValue, movieSetValue] = useState(null);
    const [movieItems, movieSetItems] = useState([
        {label: 'Interstellar', value: 'interstellar'},
        {label: 'Haunting of Hill House', value: 'haunting'},
        {label: 'Moonlight', value: 'moonlight'},
        {label: 'Get Out', value: 'getout'},
        {label: 'You', value: 'you'},
        {label: 'Ozark', value: 'ozark'},
        {label: 'Parasite', value: 'parasite'},
        {label: 'Euphoria', value: 'euphoria'},
        {label: 'Pretty Woman', value: 'prettywoman'},
        {label: 'Her', value: 'her'},
        {label: 'Manchester by the Sea', value: 'manchester'},
        {label: 'Django Unchained', value: 'django'},
        {label: 'Dallas Buyers Club', value: 'dallas'}
      ]); 
    const onMovieOpen = useCallback(() => {
        appSetOpen(false);
        bookSetOpen(false);
        careerSetOpen(false);
        destinationSetOpen(false);
        hobbySetOpen(false);
        musicSetOpen(false);
        zodiacSetOpen(false);    
    }, []);

    // Favorite Hobby 
    const [hobbyOpen, hobbySetOpen] = useState(false);
    const [hobbyValue, hobbySetValue] = useState(null);
    const [hobbyItems, hobbySetItems] = useState([
        {label: 'Reading', value: 'reading'},
        {label: 'Painting', value: 'painting'},
        {label: 'Photography', value: 'photography'},
        {label: 'Dancing', value: 'dancing'},
        {label: 'Pottery', value: 'pottery'},
        {label: 'Cooking', value: 'cooking'},
        {label: 'Gaming', value: 'gaming'},
        {label: 'Singing', value: 'singing'},
        {label: 'Acting', value: 'acting'},
        {label: 'Hiking', value: 'hiking'},
        {label: 'Wine Tasting', value: 'winetasting'},
        {label: 'Blogging', value: 'blogging'}
      ]); 
    const onHobbyOpen = useCallback(() => {
        appSetOpen(false);
        bookSetOpen(false);
        careerSetOpen(false);
        destinationSetOpen(false);
        movieSetOpen(false);
        musicSetOpen(false);
        zodiacSetOpen(false);    
    }, []);

    // Dream Destination
    const [destinationOpen, destinationSetOpen] = useState(false);
    const [destinationValue, destinationSetValue] = useState(null);
    const [destinationItems, destinationSetItems] = useState([
        {label: 'Nigeria', value: 'nigeria'},
        {label: 'Ghana', value: 'ghana'},
        {label: 'Tanzania', value: 'tanzania'},
        {label: 'Kenya', value: 'kenya'},
        {label: 'St. Lucia', value: 'stlucia'},
        {label: 'Jamaica', value: 'jamaica'},
        {label: 'Costa Rica', value: 'costarica'},
        {label: 'Canada', value: 'canada'},
        {label: 'France', value: 'france'},
        {label: 'Spain', value: 'spain'},
        {label: 'Italy', value: 'italy'},
        {label: 'Morocco', value: 'morocco'}
      ]); 
    const onDestinationOpen = useCallback(() => {
        appSetOpen(false);
        bookSetOpen(false);
        careerSetOpen(false);
        hobbySetOpen(false);
        movieSetOpen(false);
        musicSetOpen(false);
        zodiacSetOpen(false);
    }, []);

    // Future Career Plans
    const [careerOpen, careerSetOpen] = useState(false);
    const [careerValue, careerSetValue] = useState(null);
    const [careerItems, careerSetItems] = useState([
        {label: 'Engineer', value: 'engineer'},
        {label: 'Nurse', value: 'nurse'},
        {label: 'Pharmacist', value: 'pharmacist'},
        {label: 'Doctor', value: 'doctor'},
        {label: 'Surgeon', value: 'surgeon'},
        {label: 'Librarian', value: 'librarian'},
        {label: 'Human Resource representative', value: 'humanresource'},
        {label: 'Epidemiologist', value: 'epidemiologist'},
        {label: 'Electrician', value: 'electrician'},
        {label: 'Professor/ Teacher', value: 'teacher'},
        {label: 'Dentist', value: 'dentist'},
        {label: 'Veterinarian', value: 'veterinarian'}
      ]); 
    const onCareerOpen = useCallback(() => {
        appSetOpen(false);
        bookSetOpen(false);
        destinationSetOpen(false);
        hobbySetOpen(false);
        movieSetOpen(false);
        musicSetOpen(false);
        zodiacSetOpen(false);
    }, []);

    // Zodiac sign 
    const [zodiacOpen, zodiacSetOpen] = useState(false);
    const [zodiacValue, zodiacSetValue] = useState(null);
    const [zodiacItems, zodiacSetItems] = useState([
        {label: 'Aries', value: 'aries'},
        {label: 'Taurus', value: 'taurus'},
        {label: 'Gemini', value: 'gemini'},
        {label: 'Cancer', value: 'cancer'},
        {label: 'Leo', value: 'leo'},
        {label: 'Virgo', value: 'virgo'},
        {label: 'Libra', value: 'libra'},
        {label: 'Scorpio', value: 'scorpio'},
        {label: 'Sagittarius', value: 'sagittarius'},
        {label: 'Capricorn', value: 'capricorn'},
        {label: 'Aquarius', value: 'aquarius'},
        {label: 'Pisces', value: 'pisces'}
      ]); 
    const onZodiacOpen = useCallback(() => {
        appSetOpen(false);
        bookSetOpen(false);
        careerSetOpen(false);
        destinationSetOpen(false);
        hobbySetOpen(false);
        movieSetOpen(false);
        musicSetOpen(false);
    }, []);

    // Favorite app 
    const [appOpen, appSetOpen] = useState(false);
    const [appValue, appSetValue] = useState(null);
    const [appItems, appSetItems] = useState([
        {label: 'WhatsApp', value: 'whatsapp'},
        {label: 'Facebook', value: 'facebook'},
        {label: 'Pinterest', value: 'pinterest'},
        {label: 'YouTube', value: 'youtube'},
        {label: 'Instagram', value: 'instagram'},
        {label: 'Snapchat', value: 'snapchat'},
        {label: 'Twitter', value: 'twitter'},
        {label: 'Tumblr', value: 'tumblr'},
        {label: 'TikTok', value: 'tiktok'},
        {label: 'Reddit', value: 'reddit'},
        {label: 'WeChat', value: 'wechat'},
      ]); 
    const onAppOpen = useCallback(() => {
        bookSetOpen(false);
        careerSetOpen(false);
        destinationSetOpen(false);
        hobbySetOpen(false);
        movieSetOpen(false);
        musicSetOpen(false);
        zodiacSetOpen(false);    
    }, []);

    // Favorite Book
    const [bookOpen, bookSetOpen] = useState(false);
    const [bookValue, bookSetValue] = useState(null);
    const [bookItems, bookSetItems] = useState([
        {label: 'To Kill a Mockingbird', value: 'tokillamockingbird'},
        {label: 'Pride and Prejudice', value: 'prideandprejudice'},
        {label: 'Harry Potter series', value: 'harrypotter'},
        {label: 'Invisible Man', value: 'invisibleman'},
        {label: 'Percy Jackson series', value: 'percyjackson'},
        {label: 'No Longer at Ease', value: 'nolongeratease'},
        {label: 'Things Fall Apart', value: 'thingsfallapart'},
        {label: 'The Kite Runner', value: 'thekiterunner'},
        {label: 'A Thousand Splendid Suns', value: 'athousandsplendidsuns'},
        {label: 'Between the World and Me', value: 'betweentheworldandme'},
        {label: 'Othello', value: 'othello'},
      ]); 
    const onBookOpen = useCallback(() => {
        appSetOpen(false);
        careerSetOpen(false);
        destinationSetOpen(false);
        hobbySetOpen(false);
        movieSetOpen(false);
        musicSetOpen(false);
        zodiacSetOpen(false);
    }, []);

    // read from database 
    useEffect(() => {
        firebase.firestore().collection('users').doc(`${props.userInfo.id}`).get()
        .then(documentSnapshot => {
            // console.log('User exists: ', documentSnapshot.exists);
            if (documentSnapshot.exists) {
                const userData = documentSnapshot.data();
                console.log('User data: ', userData);

                // set the value of individual interests only if they were previously set 
                if (userData.favoriteartist) {
                    musicSetValue(userData.favoriteartist);
                }
                if (userData.favoritemovie) {
                    movieSetValue(userData.favoritemovie)
                }
                if (userData.favoritehobby) {
                    hobbySetValue(userData.favoritehobby);
                }
                if (userData.dreamdestination) {
                    destinationSetValue(userData.dreamdestination);
                }
                if (userData.futurecareerplans) {
                    careerSetValue(userData.futurecareerplans);
                }
                if (userData.zodiacsign) {
                    zodiacSetValue(userData.zodiacsign);
                }
                if (userData.favoriteapp) {
                    appSetValue(userData.favoriteapp);
                }
                if (userData.favoritebook) {
                    bookSetValue(userData.favoritebook);
                }
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

    // set all selections back to the default value 
    const clearAllSelection = () => {
        appSetValue(null);
        bookSetValue(null);
        careerSetValue(null);
        destinationSetValue(null);
        hobbySetValue(null);
        movieSetValue(null);
        musicSetValue(null);
        zodiacSetValue(null);    

        // clear all values from the DB 
        firebase.firestore().collection('users').doc(`${props.userInfo.id}`).update({
            favoriteartist: '', 
            favoritemovie: '', 
            favoritehobby: '', 
            dreamdestination: '', 
            futurecareerplans: '', 
            zodiacsign: '', 
            favoriteapp: '', 
            favoritebook: ''
        }).then(() => {
            console.log(`cleared all interests for the user with email ${props.userInfo.email}`);
        })
    };

    const clearAllBtnAlert = () =>
        Alert.alert(
        "Clear All",
        "This will clear all interests.",
        [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            { 
                text: "OK", 
                onPress: () => clearAllSelection(), 
                style: "destructive"
            }
        ]
    ); 

    const saveInterestsBtnAlert = () =>
        Alert.alert(
        "Save Interests",
        "This will save all your selected interests. Your profile will be updated with your new interests.",
        [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            { 
                text: "OK", 
                onPress: () => {
                    firebase.firestore().collection('users').doc(`${props.userInfo.id}`).update({
                        favoriteartist: musicValue, 
                        favoritemovie: movieValue, 
                        favoritehobby: hobbyValue, 
                        dreamdestination: destinationValue, 
                        futurecareerplans: careerValue, 
                        zodiacsign: zodiacValue, 
                        favoriteapp: appValue, 
                        favoritebook: bookValue
                    }).then(() => {
                        console.log(`saved all interests for the user with email ${props.userInfo.email}`);
                    });
                }, 
                style: "destructive"
            }
        ]
    );

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
        <DropDownPicker
            open={musicOpen}
            onOpen={onMusicOpen} // close the other potentially open tabs 
            value={musicValue}
            items={musicItems}
            setOpen={musicSetOpen}
            setValue={musicSetValue}
            setItems={musicSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="Who is your favorite music artist ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={8000}
            zIndexInverse={1000}
        />

        <DropDownPicker
            open={movieOpen}
            onOpen={onMovieOpen} // close the other potentially open tabs 
            value={movieValue}
            items={movieItems}
            setOpen={movieSetOpen}
            setValue={movieSetValue}
            setItems={movieSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="What is your favorite movie or tv show ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={7000}
            zIndexInverse={2000}
        />

        <DropDownPicker
            open={hobbyOpen}
            onOpen={onHobbyOpen} // close the other potentially open tabs 
            value={hobbyValue}
            items={hobbyItems}
            setOpen={hobbySetOpen}
            setValue={hobbySetValue}
            setItems={hobbySetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="What is your favorite hobby ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={6000}
            zIndexInverse={3000}
        />

        <DropDownPicker
            open={destinationOpen}
            onOpen={onDestinationOpen} // close the other potentially open tabs 
            value={destinationValue}
            items={destinationItems}
            setOpen={destinationSetOpen}
            setValue={destinationSetValue}
            setItems={destinationSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="Where is your dream destination ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={5000}
            zIndexInverse={4000}
        />

        <DropDownPicker
            open={careerOpen}
            onOpen={onCareerOpen} // close the other potentially open tabs 
            value={careerValue}
            items={careerItems}
            setOpen={careerSetOpen}
            setValue={careerSetValue}
            setItems={careerSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="What are your future career plans ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={4000}
            zIndexInverse={5000}
        />

        <DropDownPicker
            open={zodiacOpen}
            onOpen={onZodiacOpen} // close the other potentially open tabs 
            value={zodiacValue}
            items={zodiacItems}
            setOpen={zodiacSetOpen}
            setValue={zodiacSetValue}
            setItems={zodiacSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="What is your zodiac sign ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={3000}
            zIndexInverse={6000}
            dropDownDirection="TOP"
        />

        <DropDownPicker
            open={appOpen}
            onOpen={onAppOpen} // close the other potentially open tabs 
            value={appValue}
            items={appItems}
            setOpen={appSetOpen}
            setValue={appSetValue}
            setItems={appSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="What is your favorite social media application ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={2000}
            zIndexInverse={7000}
            dropDownDirection="TOP"
        />

        <DropDownPicker
            open={bookOpen}
            onOpen={onBookOpen} // close the other potentially open tabs 
            value={bookValue}
            items={bookItems}
            setOpen={bookSetOpen}
            setValue={bookSetValue}
            setItems={bookSetItems}
            style={{ backgroundColor: "#96B9D0", marginTop: 10, marginBottom: 10 }}
            placeholder="What is your favorite book ?"
            showArrowIcon={true}
            theme="LIGHT"
            zIndex={1000}
            zIndexInverse={8000}
            dropDownDirection="TOP"
        />
        
        <Button
          title="Clear All !"
          type='outline'
          raised={true}
          buttonStyle={styles.clearAllBtn}
          containerStyle={{ borderRadius: 15, marginTop: 10 }}
          onPress={() => clearAllBtnAlert()}
        />

        <Button
          title="Save Interests !"
          raised={true}
          buttonStyle={styles.saveInterestBtn}
          containerStyle={{ borderRadius: 15, marginTop: 18 }}
          onPress={() => saveInterestsBtnAlert()}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    clearAllBtn: {
      fontSize: 25,
      fontWeight: 'bold',
      height: 40,
      width: 180,
      borderRadius: 15,
      borderColor: '#73B4DE'
    },
    saveInterestBtn: {
      fontSize: 30,
      fontWeight: 'bold',
      height: 62,
      width: 300,
      borderRadius: 15,
      backgroundColor: '#73B4DE'
    }
})
export default InterestsPage;
