import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// need to set up dotenv to hide this from github for now, paste from the messenger gc when you need to run the app.
const firebaseconfig = {
    // paste from messenger
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};