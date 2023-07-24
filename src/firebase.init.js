// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC52O0vufA-zNzsBm8vw5zEKhZ4PcalzSw",
  authDomain: "computer-house-e0e7c.firebaseapp.com",
  projectId: "computer-house-e0e7c",
  storageBucket: "computer-house-e0e7c.appspot.com",
  messagingSenderId: "275587626152",
  appId: "1:275587626152:web:4166994407193c91483e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth