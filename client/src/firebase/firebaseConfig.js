import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// need to set up dotenv to hide this from github for now, paste from the messenger gc when you need to run the app.
const firebaseConfig = {
    
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};