import firebase from "firebase";
import "firebase/storage"

 var firebaseConfig = {

    apiKey: "AIzaSyDVT6UtPyZ3yt6ZqQkm1_rx0ydg7QjM9dQ",

    authDomain: "daily-habits-6f188.firebaseapp.com",

    projectId: "daily-habits-6f188",

    storageBucket: "daily-habits-6f188.appspot.com",

    messagingSenderId: "280744259734",

    appId: "1:280744259734:web:4ac7869d1ce3155c5c12b7"

  };
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore();
  
  export default database;

  
