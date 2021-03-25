import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXMs9nZyXffG3PwhYqk6I0h_QGfk4tVaE",
    authDomain: "proyect-crud-7d8fc.firebaseapp.com",
    databaseURL: "https://proyect-crud-7d8fc-default-rtdb.firebaseio.com",
    projectId: "proyect-crud-7d8fc",
    storageBucket: "proyect-crud-7d8fc.appspot.com",
    messagingSenderId: "976292028222",
    appId: "1:976292028222:web:a817e3bae59dccda5e166f"
  };

//   inicializacion de firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();
  

  export {db}