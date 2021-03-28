import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA5syCG9vcTf1SPhe86mGmaG3_Txm7PYIY",
    authDomain: "facey-2f6e4.firebaseapp.com",
    projectId: "facey-2f6e4",
    storageBucket: "facey-2f6e4.appspot.com",
    messagingSenderId: "254632493319",
    appId: "1:254632493319:web:693d6099bc681215dd85a2"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();
  const auth = firebase.auth()
  // const storage = firebase.storage()

  export {firebase,db,auth}