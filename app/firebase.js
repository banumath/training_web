import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAntQbiIiXXyZgRjx1_AzFrAL3HLr_3T3M",
    authDomain: "dear-diary-5b3e7.firebaseapp.com",
    databaseURL: "https://dear-diary-5b3e7.firebaseio.com",
    projectId: "dear-diary-5b3e7",
    storageBucket: "dear-diary-5b3e7.appspot.com",
    messagingSenderId: "873013166021",
    appId: "1:873013166021:web:ab275fb4f00f9cdc4e15ac",
    measurementId: "G-KF7LDQ4VRK"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
  