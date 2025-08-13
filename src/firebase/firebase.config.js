// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXL6RrelRaV1HwJ4_mpCiVq4Cit8At5G4",
  authDomain: "fir-all-project-93e94.firebaseapp.com",
  projectId: "fir-all-project-93e94",
  storageBucket: "fir-all-project-93e94.firebasestorage.app",
  messagingSenderId: "205287141548",
  appId: "1:205287141548:web:185ed9aa6d6a3e1d03af09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
const auth = getAuth(app);
export default auth;
