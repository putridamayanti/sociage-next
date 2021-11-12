import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrfB_PXAvi-5B0cTesi8d4jqJnLF7_qWA",
    authDomain: "sociage.firebaseapp.com",
    projectId: "sociage",
    storageBucket: "sociage.appspot.com",
    messagingSenderId: "599879706037",
    appId: "1:599879706037:web:5d5f4969cb20b176afa5fc"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();

export default firebase;