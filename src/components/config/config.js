import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCPlysozc8ndvu4dogQQp1VYXg8n28fI4Y",
  authDomain: "palluyirkalam-7103d.firebaseapp.com",
  projectId: "palluyirkalam-7103d",
  storageBucket: "palluyirkalam-7103d.appspot.com",
  messagingSenderId: "449315254140",
  appId: "1:449315254140:web:8ec52116b33a65db21bef9"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db,storage & auth
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();


export { db, auth, storage }