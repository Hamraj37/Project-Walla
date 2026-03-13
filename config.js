// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyM_koldhnehz36MJu1tdoRPg7A_dzOcc",
  authDomain: "walla-59ccc.firebaseapp.com",
  databaseURL: "https://walla-59ccc-default-rtdb.firebaseio.com",
  projectId: "walla-59ccc",
  storageBucket: "walla-59ccc.appspot.com",
  messagingSenderId: "589698040631",
  appId: "1:589698040631:web:a007025dfdb56c6f0a90b2",
  measurementId: "G-B1N0KE3LYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };