import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOHA-lnVLwKWjuXeajp5nWeV8T0l3O2pc",
  authDomain: "shop-b32a3.firebaseapp.com",
  projectId: "shop-b32a3",
  storageBucket: "shop-b32a3.firebasestorage.app",
  messagingSenderId: "1067450778285",
  appId: "1:1067450778285:web:c1e5485e0d350523f73c24",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
