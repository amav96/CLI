import firebase from "firebase/app";
// If you are using v7 or any earlier version

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
 
 // Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCnoVAgI6aukHdifur-rIJT89anYbDq8Ag",
    authDomain: "facebooky-c4bc8.firebaseapp.com",
    databaseURL: "https://facebooky-c4bc8-default-rtdb.firebaseio.com",
    projectId: "facebooky-c4bc8",
    storageBucket: "facebooky-c4bc8.appspot.com",
    messagingSenderId: "800932173963",
    appId: "1:800932173963:web:25128a6f1a09ad3c199c8e"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase,db,auth,storage}