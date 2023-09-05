// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfyG9Vf9WD7i5Z6xoPeI4kRI7JHKtwjGI",
  authDomain: "netflixgpt-313ed.firebaseapp.com",
  projectId: "netflixgpt-313ed",
  storageBucket: "netflixgpt-313ed.appspot.com",
  messagingSenderId: "767932447793",
  appId: "1:767932447793:web:0d817cb4124f2c13b6a910",
  measurementId: "G-C5PLT7CDVQ"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default app 
export const auth = getAuth()
