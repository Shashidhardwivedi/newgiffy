// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLhl9gt4aUO9eelq_cSvM2s2QI3gDVzI4",
  authDomain: "mygiffy-f2632.firebaseapp.com",
  projectId: "mygiffy-f2632",
  storageBucket: "mygiffy-f2632.appspot.com",
  messagingSenderId: "902860908071",
  appId: "1:902860908071:web:e87ed35afabeb6a90ad002",
  measurementId: "G-V066TEBLBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
