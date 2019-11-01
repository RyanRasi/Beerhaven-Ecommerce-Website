 import firebase from "firebase";
require("firebase/firestore");
import("firebase/storage");


  // Your web app's Firebase configuration
  
  // 

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  export {fb,db}
  