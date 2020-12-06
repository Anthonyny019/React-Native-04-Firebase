import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0h79Bb7cMBOWnOa4oqEDEUXtQAEG0h7o",
    authDomain: "colecionaveis--fb.firebaseapp.com",
    databaseURL: "https://colecionaveis--fb.firebaseio.com",
    projectId: "colecionaveis--fb",
    storageBucket: "colecionaveis--fb.appspot.com",
    messagingSenderId: "655416207448",
    appId: "1:655416207448:web:8e89544d296896e789822d",
    measurementId: "G-GXTBE7CG1K"
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();