import firebase from 'firebase/app'

require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')


const firebaseConfig = {
    apiKey: "AIzaSyBXMs9nZyXffG3PwhYqk6I0h_QGfk4tVaE",
    authDomain: "proyect-crud-7d8fc.firebaseapp.com",
    databaseURL: "https://proyect-crud-7d8fc-default-rtdb.firebaseio.com",
    projectId: "proyect-crud-7d8fc",
    storageBucket: "proyect-crud-7d8fc.appspot.com",
    messagingSenderId: "976292028222",
    appId: "1:976292028222:web:8f07334fe7e617f75e166f"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}