import firebase from "firebase";
var firebaseConfig = {

    apiKey: "AIzaSyA3GZb3z_13K7PObOVEqADt-8AXNoanJYc",
    authDomain: "chattogether-c42a3.firebaseapp.com",
    projectId: "chattogether-c42a3",
    storageBucket: "chattogether-c42a3.appspot.com",
    messagingSenderId: "281227722765",
    appId: "1:281227722765:web:576b0cc7c0b052ebc35544"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
