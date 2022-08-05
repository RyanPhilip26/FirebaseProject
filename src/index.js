// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1nN3DirDJ-kD3DbJgfScfKX2-Ns0Q9-Y",
  authDomain: "fir-new-401b6.firebaseapp.com",
  projectId: "fir-new-401b6",
  storageBucket: "fir-new-401b6.appspot.com",
  messagingSenderId: "976987990641",
  appId: "1:976987990641:web:36bb9d1c1654c1ed0809d0",
  measurementId: "G-L9MEK1GXXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)