import firebase from 'firbase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDX47132T-AttIqwkH-AJyNW_IhKdibWLY",
    authDomain: "autenticacion-vue-f463c.firebaseapp.com",
    projectId: "autenticacion-vue-f463c",
    storageBucket: "autenticacion-vue-f463c.appspot.com",
    messagingSenderId: "1002497520047",
    appId: "1:1002497520047:web:35404e4984ea3d9b2bbf5a"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}
