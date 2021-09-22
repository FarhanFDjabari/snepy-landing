import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3txX-I00qKVr3Q4WxBiufzxXju6NDzT4",
  authDomain: "snepy-5759d.firebaseapp.com",
  databaseURL: "https://snepy-5759d-default-rtdb.firebaseio.com",
  projectId: "snepy-5759d",
  storageBucket: "snepy-5759d.appspot.com",
  messagingSenderId: "1068041054014",
  appId: "1:1068041054014:web:d9578d56372cab501fee6f",
  measurementId: "G-Z0LE4JR2TN",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();
