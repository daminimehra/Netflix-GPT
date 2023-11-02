// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4tmWIsy6V4C19JTkb6nPpfhVZGdLxDxs",
  authDomain: "netflixgpt-4b23c.firebaseapp.com",
  projectId: "netflixgpt-4b23c",
  storageBucket: "netflixgpt-4b23c.appspot.com",
  messagingSenderId: "1081538721168",
  appId: "1:1081538721168:web:b16777b2f152698792ef15",
  measurementId: "G-1VZDH97B3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();