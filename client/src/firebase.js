
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDzq0_jdHYTnseAMV80L1kJhGFFDlkCXog",
    authDomain: "react-contact-cc22b.firebaseapp.com",
    databaseURL: "https://react-contact-cc22b-default-rtdb.firebaseio.com",
    projectId: "react-contact-cc22b",
    storageBucket: "react-contact-cc22b.appspot.com",
    messagingSenderId: "799311948479",
    appId: "1:799311948479:web:f0557cdb9941511a71340a"
  };
  // Initialize Firebase
  var db = firebase.initializeApp(firebaseConfig);

  export default db.database().ref()