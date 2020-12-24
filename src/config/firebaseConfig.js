import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDjPVcWFTWB205uU_G_sUj_Rqo1KGeb5dg",
    authDomain: "todoappv1-a6ed2.firebaseapp.com",
    projectId: "todoappv1-a6ed2",
    storageBucket: "todoappv1-a6ed2.appspot.com",
    messagingSenderId: "780008941249",
    appId: "1:780008941249:web:756c2b3e213ee0c1bc9640"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
