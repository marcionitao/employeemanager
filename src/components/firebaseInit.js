import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const api = firebaseApp.firestore();
api.settings({ timestampsInSnapshots: true });

export default api;
