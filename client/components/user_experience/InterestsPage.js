import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
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
        {label: 'Frank Ocean', value: '00'},
        {label: 'Summer Walker', value: '01'},
        {label: 'Rihanna', value: '02'},
        {label: 'Beyonce', value: '03'},
        {label: 'J Cole', value: '04'},
        {label: 'Young Thug', value: '05'},
        {label: 'Drake', value: '06'},
        {label: 'Nicki Minaj', value: '07'},
        {label: 'Mereba', value: '08'},
        {label: 'JID', value: '09'},
        {label: 'The Weeknd', value: '10'},
        {label: 'Ariana Grande', value: '11'},
        {label: 'Taylor Swift', value: '12'},
        {label: 'Doja Cat', value: '13'},
        {label: 'EARTHGANG', value: '14'},
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
        {label: 'Interstellar', value: '00'},
        {label: '500 Days of Summer', value: '01'},
        {label: 'Moonlight', value: '02'},
        {label: 'Get Out', value: '03'},
        {label: 'You', value: '04'},
        {label: 'Ozark', value: '05'},
        {label: 'Parasite', value: '06'},
        {label: 'Euphoria', value: '07'},
        {label: 'Manchester by the Sea', value: '08'},
        {label: 'Dallas Buyers Club', value: '09'},
        {label: 'Eternal Sunshine of the Spotless Mind', value: '10'},
        {label: 'HER', value: '11'},
        {label: 'Fleabag', value: '12'},
        {label: 'Avatar', value: '13'},
        {label: 'How I Met Your Mother', value: '14'},
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
        {label: 'Reading', value: '00'},
        {label: 'Painting', value: '01'},
        {label: 'Photography', value: '02'},
        {label: 'Dancing', value: '03'},
        {label: 'Pottery', value: '04'},
        {label: 'Cooking', value: '05'},
        {label: 'Gaming', value: '06'},
        {label: 'Singing', value: '07'},
        {label: 'Acting', value: '08'},
        {label: 'Hiking', value: '09'},
        {label: 'Gardening', value: '10'},
        {label: 'Drawing', value: '11'},
        {label: 'Learning New Things', value: '12'},
        {label: 'Playing Sports', value: '13'},
        {label: 'Doing Nothing!', value: '14'},
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
        {label: 'Nigeria', value: '00'},
        {label: 'Ghana', value: '01'},
        {label: 'Tanzania', value: '02'},
        {label: 'Kenya', value: '03'},
        {label: 'St. Lucia', value: '04'},
        {label: 'Jamaica', value: '05'},
        {label: 'Costa Rica', value: '06'},
        {label: 'France', value: '07'},
        {label: 'Spain', value: '08'},
        {label: 'Italy', value: '09'},
        {label: 'Dubai', value: '10'},
        {label: 'Mexico', value: '11'},
        {label: 'Morocco', value: '12'},
        {label: 'Egypt', value: '13'},
        {label: 'Greece', value: '14'},
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
        {label: 'Engineer', value: '00'},
        {label: 'Nurse', value: '01'},
        {label: 'Pharmacist', value: '02'},
        {label: 'Doctor', value: '03'},
        {label: 'Surgeon', value: '04'},
        {label: 'Librarian', value: '05'},
        {label: 'Human Resource Representative', value: '06'},
        {label: 'Epidemiologist', value: '07'},
        {label: 'Electrician', value: '08'},
        {label: 'Musician', value: '09'},
        {label: 'Influencer', value: '10'},
        {label: 'Personal Support Worker', value: '11'},
        {label: 'Social Work', value: '12'},
        {label: 'Consultant', value: '13'},
        {label: 'Still figuring it out', value: '14'},
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
        {label: 'Aries', value: '00'},
        {label: 'Taurus', value: '01'},
        {label: 'Gemini', value: '02'},
        {label: 'Cancer', value: '03'},
        {label: 'Leo', value: '04'},
        {label: 'Virgo', value: '05'},
        {label: 'Libra', value: '06'},
        {label: 'Scorpio', value: '07'},
        {label: 'Sagittarius', value: '08'},
        {label: 'Capricorn', value: '09'},
        {label: 'Aquarius', value: '10'},
        {label: 'Pisces', value: '11'}
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
        {label: 'WhatsApp', value: '00'},
        {label: 'Facebook', value: '01'},
        {label: 'Pinterest', value: '02'},
        {label: 'YouTube', value: '03'},
        {label: 'Instagram', value: '04'},
        {label: 'Snapchat', value: '05'},
        {label: 'Twitter', value: '06'},
        {label: 'Tumblr', value: '07'},
        {label: 'TikTok', value: '08'},
        {label: 'Reddit', value: '09'},
        {label: 'Discord', value: '10'},
        {label: 'Tinder', value: '11'},
        {label: 'LinkedIn', value: '12'},
        {label: 'Ask.fm', value: '13'},
        {label: 'Flickr', value: '14'},
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
        {label: 'To Kill a Mockingbird', value: '00'},
        {label: 'Pride and Prejudice', value: '01'},
        {label: 'Harry Potter series', value: '02'},
        {label: 'Invisible Man', value: '03'},
        {label: 'Percy Jackson series', value: '04'},
        {label: 'No Longer at Ease', value: '05'},
        {label: 'Things Fall Apart', value: '06'},
        {label: 'The Kite Runner', value: '07'},
        {label: 'A Thousand Splendid Suns', value: '08'},
        {label: 'Between the World and Me', value: '09'},
        {label: 'Catch-22', value: '10'},
        {label: 'The Great Gatsby', value: '11'},
        {label: 'Jane Eyre', value: '12'},
        {label: 'The Catcher in the Rye', value: '13'},
        {label: 'One Hundred Years of Solitude', value: '14'},
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
                        favoritebook: bookValue, 
                        user_interests_hash: musicValue + movieValue + hobbyValue + destinationValue + careerValue + zodiacValue + appValue + bookValue
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
