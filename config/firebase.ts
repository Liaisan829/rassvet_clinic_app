import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtKCluJaTXbTRYEDBoGj1h-8Nd1V7Tgmg",
    authDomain: "rassvet-87044.firebaseapp.com",
    projectId: "rassvet-87044",
    storageBucket: "rassvet-87044.appspot.com",
    messagingSenderId: "537561414398",
    appId: "1:537561414398:web:298f833115eb2d21a543af"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();