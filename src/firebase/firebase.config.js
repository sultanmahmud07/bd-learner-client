// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_u4bCAAXAmDscXihOyPK0qlbgeJTDAqw",
  authDomain: "bd-learner.firebaseapp.com",
  projectId: "bd-learner",
  storageBucket: "bd-learner.appspot.com",
  messagingSenderId: "91475296514",
  appId: "1:91475296514:web:fa7ed970f53349ce48821b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;