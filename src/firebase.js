 import firebase from "firebase";
require("firebase/firestore");
import("firebase/storage");


  // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB6YCe82BqsbZ6LTHhsKERB-6do_hPvFKw",
        authDomain: "vue-beerhaven-ecommerce.firebaseapp.com",
        databaseURL: "https://vue-beerhaven-ecommerce.firebaseio.com",
        projectId: "vue-beerhaven-ecommerce",
        storageBucket: "vue-beerhaven-ecommerce.appspot.com",
        messagingSenderId: "969208901500",
        appId: "1:969208901500:web:9aeb76961c17fe8c"
      };
    
  // 

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  export {fb,db}
  