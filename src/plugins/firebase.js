import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDRDq6Jv4niSfW7BQKnOGuVTXtqizCf-oo",
  authDomain: "infinity-gauntlet-9d106.firebaseapp.com",
  databaseURL: "https://infinity-gauntlet-9d106.firebaseio.com",
  projectId: "infinity-gauntlet-9d106",
  storageBucket: "infinity-gauntlet-9d106.appspot.com",
  messagingSenderId: "565672530958"
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
