import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfA_izjotgnNveT92em9GKvUJFjGVUkcY",
  authDomain: "auth-deplopment.firebaseapp.com",
  projectId: "auth-deplopment",
  storageBucket: "auth-deplopment.appspot.com",
  messagingSenderId: "800137439284",
  appId: "1:800137439284:web:022ad310f09613d4504261"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);