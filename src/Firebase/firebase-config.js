import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtcaKiYF6VoJR_i2lVRbEb5Mnzabe_cfs",
  authDomain: "step-web-ab47d.firebaseapp.com",
  projectId: "step-web-ab47d",
  storageBucket: "step-web-ab47d.appspot.com",
  messagingSenderId: "336673522798",
  appId: "1:336673522798:web:bbcf0deb2244cb5810527f",
  measurementId: "G-7ZHW3NZ538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);

export { app, store };
