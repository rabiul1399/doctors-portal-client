// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_APIKEY,
  // authDomain:process.env.REACT_APP_AUTHDOMAIN,
  // projectId:process.env.REACT_APP_PROJECTID,
  // storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  // appId:process.env.REACT_APP_APPID,
  apiKey: "AIzaSyC4xZKdLXgrerMhY_EulqYJQoo6rjJXq8Q",
  authDomain: "doctors-portal-d92c2.firebaseapp.com",
  projectId: "doctors-portal-d92c2",
  storageBucket: "doctors-portal-d92c2.appspot.com",
  messagingSenderId: "984482055581",
  appId: "1:984482055581:web:f5f19aac41d380ea355b74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;