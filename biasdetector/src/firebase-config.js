// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABjBK_VWbYydu7TvAKjgQYIMZcW-RReeM",
  authDomain: "ehts-project.firebaseapp.com",
  databaseURL: "https://ehts-project-default-rtdb.firebaseio.com",
  projectId: "ehts-project",
  storageBucket: "ehts-project.appspot.com",
  messagingSenderId: "267133300099",
  appId: "1:267133300099:web:e614d908995b1217501ab6",
  measurementId: "G-V2560Q70MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 