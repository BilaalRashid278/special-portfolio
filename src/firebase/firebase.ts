import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxbrfnnrLGo3YK4PtYQSVQm1x50QS43YA",
    authDomain: "special-portfolio-91a57.firebaseapp.com",
    projectId: "special-portfolio-91a57",
    storageBucket: "special-portfolio-91a57.appspot.com",
    messagingSenderId: "857368955208",
    appId: "1:857368955208:web:aef6f0cb872ae969364b7d"
};

const app = initializeApp(firebaseConfig);


export const firestoreDB = getFirestore(app);

export default app;