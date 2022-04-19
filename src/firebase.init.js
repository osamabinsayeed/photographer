// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDub41FFfEWjgwFWGvyz3uyUVrezuD3A5s",
    authDomain: "photographer-osama.firebaseapp.com",
    projectId: "photographer-osama",
    storageBucket: "photographer-osama.appspot.com",
    messagingSenderId: "522680747025",
    appId: "1:522680747025:web:1d5aec8242f9534d8e9db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;