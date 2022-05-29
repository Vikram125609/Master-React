// This will have a configuration firebase 
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDTa-7H4i4lM8VUxQsDXgNs_aWHcc4IrHU",
    authDomain: "authentication-tutorial-1a5ac.firebaseapp.com",
    projectId: "authentication-tutorial-1a5ac",
    storageBucket: "authentication-tutorial-1a5ac.appspot.com",
    messagingSenderId: "450901396788",
    appId: "1:450901396788:web:d5f02f8af7f4457d436961",
    measurementId: "G-7PBH2ZDHSZ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);