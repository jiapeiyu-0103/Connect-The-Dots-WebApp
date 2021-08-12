import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDfD-Z03EEoWzzcZDOsqMkC-2quaM-h7qs",
    authDomain: "connect-the-dots-9799e.firebaseapp.com",
    projectId: "connect-the-dots-9799e",
    storageBucket: "connect-the-dots-9799e.appspot.com",
    messagingSenderId: "860924271992",
    appId: "1:860924271992:web:ad01dd1bf584b7118afc8d",
    measurementId: "G-FTF4W1QZLX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };