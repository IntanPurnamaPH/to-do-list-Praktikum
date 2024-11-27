import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCc3ZOOLLzSnwhY6TGJ52lqhA6TVbBbV2A",
    authDomain: "to-do-list-praktikum.firebaseapp.com",
    projectId: "to-do-list-praktikum",
    storageBucket: "to-do-list-praktikum.firebasestorage.app",
    messagingSenderId: "684833347082",
    appId: "1:684833347082:web:7900f03af652d5aed0b1f3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);