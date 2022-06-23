import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFI0Yz_kfIN-aOxQXDjjm5mNMVrdWq5u8',
  authDomain: 'rn-uber-eats-clone-base.firebaseapp.com',
  projectId: 'rn-uber-eats-clone-base',
  storageBucket: 'rn-uber-eats-clone-base.appspot.com',
  messagingSenderId: '84156541265',
  appId: '1:84156541265:web:1fa2022d08d5a29435cb70',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
