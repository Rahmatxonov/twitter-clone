// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMRGdH9HzLG7u_G_JLTi91FPzd5imByN8",
  authDomain: "twitter-clone-8138d.firebaseapp.com",
  projectId: "twitter-clone-8138d",
  storageBucket: "twitter-clone-8138d.appspot.com",
  messagingSenderId: "838203339425",
  appId: "1:838203339425:web:c8353b5c6a64f91934f6e0",
  measurementId: "G-XVY7WPG11K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
