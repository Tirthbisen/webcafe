// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiYDTmKtyx7cd5dtboNRKK2iIcgrtIH6M",
  authDomain: "web-cafe-9fc52.firebaseapp.com",
  projectId: "web-cafe-9fc52",
  storageBucket: "web-cafe-9fc52.firebasestorage.app",
  messagingSenderId: "849163886072",
  appId: "1:849163886072:web:4f9e0b92d540f602d4ca0d",
  measurementId: "G-GFG4M7ML0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);