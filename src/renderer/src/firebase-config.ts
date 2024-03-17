// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAyMxU5dKcBGPPgBJlE7iqMSsNS7QNyi-o',
  authDomain: 'write-c0c34.firebaseapp.com',
  projectId: 'write-c0c34',
  storageBucket: 'write-c0c34.appspot.com',
  messagingSenderId: '902153205800',
  appId: '1:902153205800:web:2fa91ce099d2f391f91d1d',
  measurementId: 'G-LXHEJ1DQER',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);
// const analytics = getAnalytics(app);
