import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDVvgHjJYKqOjvon7kkprr-trDqfISQUdI",
    authDomain: "devlinks-5b613.firebaseapp.com",
    projectId: "devlinks-5b613",
    storageBucket: "devlinks-5b613.appspot.com",
    messagingSenderId: "947340913264",
    appId: "1:947340913264:web:748d8f6491797608dfe2b5",
    measurementId: "G-8KNYNKSDVW"
  };

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()
