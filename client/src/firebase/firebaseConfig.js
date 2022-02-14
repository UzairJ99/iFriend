import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// need to set up dotenv to hide this from github for now, paste from the messenger gc when you need to run the app.
const firebaseConfig = {
    apiKey: 'AIzaSyCN_ABhqou46YqjGaXIWzPK3eSMfLRlr8g',
    authDomain: 'ifriend-45f5e.firebaseapp.com',
    databaseURL: 'https://ifriend-45f5e-default-rtdb.firebaseio.com/',
    projectId: 'ifriend-45f5e',
    appId: '1:477250442772:ios:54d74df4499b2e60bdf901',
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};