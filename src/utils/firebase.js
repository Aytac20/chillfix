// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDype1z_6dfnmcGZrl5Z_DbeJS-0W0PaCY",
  authDomain: "movie-tracker-app-bddf3.firebaseapp.com",
  projectId: "movie-tracker-app-bddf3",
  appId: "1:988553602952:web:a7a75ec5ed96661cfb7c3d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
