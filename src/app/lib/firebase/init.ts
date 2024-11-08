// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5u9VWsrexQt6JWBiNlxzZsKHF9_wH3cs",
  authDomain: "my-next-app-ea6af.firebaseapp.com",
  projectId: "my-next-app-ea6af",
  storageBucket: "my-next-app-ea6af.firebasestorage.app",
  messagingSenderId: "356197387764",
  appId: "1:356197387764:web:06d3a2cc7cf2758d2f3da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;