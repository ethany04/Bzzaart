import { initializeApp, getApp } from '@react-native-firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBAT1Z_sjnfbwsuSqIKkV2WdY1VIi8Dwwk',
    authDomain: 'bazaart-7610f.firebaseapp.com',
    projectId: 'bazaart-7610f',
    storageBucket: 'bazaart-7610f.appspot.com',
    messagingSenderId: '433196680267',
    appId: '1:433196680267:web:5b103f35f090104090f9ce'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };