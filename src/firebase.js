// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCfBfDjkZh_7cSUbQZXaC8C5ZZneFTOLaY",
  authDomain: "amravatiexpress-302d9.firebaseapp.com",
  databaseURL: "https://amravatiexpress-302d9.firebaseio.com",
  projectId: "amravatiexpress-302d9",
  storageBucket: "amravatiexpress-302d9.appspot.com",
  messagingSenderId: "998191133300",
  appId: "1:998191133300:web:f2591907a67a9246579721",
  measurementId: "G-5BY6W6QMBT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
