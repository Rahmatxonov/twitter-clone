import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRUYcYjUM9BOm5WZbetYTmH1hzhSb3JoM",
  authDomain: "twitter-46388.firebaseapp.com",
  projectId: "twitter-46388",
  storageBucket: "twitter-46388.appspot.com",
  messagingSenderId: "677599071406",
  appId: "1:677599071406:web:f27d6ee7c44805ca97f13f",
  measurementId: "G-VV11TWVY0W",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
