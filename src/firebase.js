import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCW1JjzfmSGFo2SlKQE27MO6450TGRDiiU",
    authDomain: "todoist-db4d9.firebaseapp.com",
    databaseURL: "https://todoist-db4d9.firebaseio.com",
    projectId: "todoist-db4d9",
    storageBucket: "todoist-db4d9.appspot.com",
    messagingSenderId: "1087991078351",
    appId: "1:1087991078351:web:e4ad065b5024f861e946ba",
    measurementId: "G-MS07E5GSNP"
});

export { firebaseConfig as firebase };
