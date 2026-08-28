// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB823IqqOXCgKWyOIMwl_8S9iF2yvgnYkA",
  authDomain: "commercecontrol-15abd.firebaseapp.com",
  projectId: "commercecontrol-15abd",
  storageBucket: "commercecontrol-15abd.firebasestorage.app",
  messagingSenderId: "791805339037",
  appId: "1:791805339037:web:f78ec06da412f5da8c3b74"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { app };