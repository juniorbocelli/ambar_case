import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import * as FirebaseData from '../../globals/configurations';

const firebaseConfig = {
  apiKey: FirebaseData.FIREBASE_API_KEY,
  authDomain: `${FirebaseData.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FirebaseData.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
  projectId: FirebaseData.FIREBASE_PROJECT_ID,
  storageBucket: `${FirebaseData.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FirebaseData.FIREBASE_MESSAGING_SENDER_ID,
  appId: FirebaseData.FIREBASE_APP_ID,
  measurementId: FirebaseData.FIREBASE_MEASUREMENT_ID,
};

const firebaseConfig2 = {
  apiKey: "AIzaSyDh9Wq0_DL4MKkfEE5SWwY15PwVLMr8Rsg",
  authDomain: "ambar-case.firebaseapp.com",
  databaseURL: "https://ambar-case-default-rtdb.firebaseio.com",
  projectId: "ambar-case",
  storageBucket: "ambar-case.appspot.com",
  messagingSenderId: "342796671114",
  appId: "1:342796671114:web:55134138e3e2da27a1f573",
  measurementId: "G-C9X0Y0JKZ9"
};

function initFirebase() {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
}

initFirebase();

const database = firebase.database();

export { firebase, database };