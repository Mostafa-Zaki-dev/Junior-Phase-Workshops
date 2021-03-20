import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDtoA-qkyXv3DnK4HvqjHfQs8b10TU651U',
  authDomain: 'zaki-todos.firebaseapp.com',
  projectId: 'zaki-todos',
  storageBucket: 'zaki-todos.appspot.com',
  messagingSenderId: '201726742827',
  appId: '1:201726742827:web:992102440b7818a503756e',
  measurementId: 'G-1469RYNRYC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
