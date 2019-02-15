import firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyDiNOeg5AvIJVzRXCyIctkbgHo4c2Q10Gg",
    authDomain: "dijo-aa415.firebaseapp.com",
    databaseURL: "https://dijo-aa415.firebaseio.com",
    projectId: "dijo-aa415",
    storageBucket: "dijo-aa415.appspot.com",
    messagingSenderId: "239397129161"
  };
 const fire = firebase.initializeApp(config);
 export default fire;