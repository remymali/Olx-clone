import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE2ajqXu-Bgaa1TrpZCTp-_kNWUcO9dPg",
    authDomain: "demoproject-f733f.firebaseapp.com",
    projectId: "demoproject-f733f",
    storageBucket: "demoproject-f733f.appspot.com",
    messagingSenderId: "714296497423",
    appId: "1:714296497423:web:c5be8f2879835ff7c4da7a",
    measurementId: "G-3X0D2D9T2Z"
  };
 export default firebase.initializeApp(firebaseConfig)