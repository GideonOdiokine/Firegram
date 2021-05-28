import firebase from "firebase/app";
import "firebase/storage";
//  firestore is our database why firebase/storage is for storing our images
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAAco4vw5I2Dm7fkPe4feeppVF8nDCAgTw",
  authDomain: "myfiregrampro.firebaseapp.com",
  projectId: "myfiregrampro",
  storageBucket: "myfiregrampro.appspot.com",
  messagingSenderId: "567242200343",
  appId: "1:567242200343:web:6bf16c088ab1dcacf29352",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
