// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4eY76UQFb0vDa8JLBXG3o-uHvQp5M58Y",
  authDomain: "i4chan-diary.firebaseapp.com",
  projectId: "i4chan-diary",
  storageBucket: "i4chan-diary.appspot.com",
  messagingSenderId: "32900342455",
  appId: "1:32900342455:web:c68b266a7676aa17282332",
  measurementId: "G-VZTZ6XJ9YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}