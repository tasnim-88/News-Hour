// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlmMQ-EWWxYxzRw1p95F-ILJjELaNWbqI",
  authDomain: "news-hour-5dd22.firebaseapp.com",
  projectId: "news-hour-5dd22",
  storageBucket: "news-hour-5dd22.firebasestorage.app",
  messagingSenderId: "886837136105",
  appId: "1:886837136105:web:643e5ff0bbc35752c6be78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app