import firebase from "firebase";

const  firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyCH6rfacNINUZiEFYOpSj-3NkLOgkedOSI",
        authDomain: "facebook-messenger-clone-e557e.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-e557e.firebaseio.com",
        projectId: "facebook-messenger-clone-e557e",
        storageBucket: "facebook-messenger-clone-e557e.appspot.com",
        messagingSenderId: "716496437481",
        appId: "1:716496437481:web:c565fb391d31ce57637078",
        measurementId: "G-ZHQV27K19Y"
    }
);

const db=firebaseApp.firestore();

export default db;