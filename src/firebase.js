import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyA9aO6nB_sh0S9mJJmGuaji2_bYGRMdmE8",
    authDomain: "facebook-messenger-clone-b060b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-b060b.firebaseio.com",
    projectId: "facebook-messenger-clone-b060b",
    storageBucket: "facebook-messenger-clone-b060b.appspot.com",
    messagingSenderId: "999899699939",
    appId: "1:999899699939:web:335c7b4feecbe6ffbfc3d6",
    measurementId: "G-7RT6EP19JW"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export default firebase;