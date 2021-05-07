 
 import * as firebase from 'firebase/app';
 import 'firebase/storage';
//  firestore is our database why firebase/storage is for storing our images
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBB2NTg9nAahU-dhJzMakNShMm86WmUHVk",
    authDomain: "my-firegram-28954.firebaseapp.com",
    projectId: "my-firegram-28954",
    storageBucket: "my-firegram-28954.appspot.com",
    messagingSenderId: "912807280835",
    appId: "1:912807280835:web:9ae04690c6e377dbe9e276"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore, projectStorage}