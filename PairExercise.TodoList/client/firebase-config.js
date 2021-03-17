import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyA_XjzN-OzTYW5Rvow7FWAXJ7qnF5VKUYE',
  authDomain: 'todos-b5bfd.firebaseapp.com',
  projectId: 'todos-b5bfd',
  storageBucket: 'todos-b5bfd.appspot.com',
  messagingSenderId: '5763232846',
  appId: '1:5763232846:web:4c493946883998d674ff1f',
  measurementId: 'G-QFTXH30RY7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
