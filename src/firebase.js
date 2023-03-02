import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrRl30mymYV2PAa8S8ow_68EUwkNQTDkU",
  authDomain: "community-d7367.firebaseapp.com",
  projectId: "community-d7367",
  storageBucket: "community-d7367.appspot.com",
  messagingSenderId: "468653785102",
  appId: "1:468653785102:web:bca0a518fcdcff2a663c5f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
