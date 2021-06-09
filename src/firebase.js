
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQ8Gk94AbjhmYtV4YVbYzFwIuB8X3eqMc",
    authDomain: "todo-app-cp-7c6ce.firebaseapp.com",
    databaseURL: "https://todo-app-cp-7c6ce.firebaseio.com",
    projectId: "todo-app-cp-7c6ce",
    storageBucket: "todo-app-cp-7c6ce.appspot.com",
    messagingSenderId: "248899346523",
    appId: "1:248899346523:web:3e90a14d4d35c1807d9f7e",
    measurementId: "G-Y3S0S8S153"
});

const db = firebaseApp.firestore();

export default db;