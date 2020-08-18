import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqLk2LzHW0-wFFpTepY2umFtz4s8RT9F8",
    authDomain: "twitter-react-clone-4a249.firebaseapp.com",
    databaseURL: "https://twitter-react-clone-4a249.firebaseio.com",
    projectId: "twitter-react-clone-4a249",
    storageBucket: "twitter-react-clone-4a249.appspot.com",
    messagingSenderId: "592173721554",
    appId: "1:592173721554:web:1f6baa67bcae057a8cca0b",
    measurementId: "G-C208MJ5VFB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;