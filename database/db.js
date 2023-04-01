import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXDixVFg5ofXBRytK03T_RJBaTTFnh0pE",
  authDomain: "imagigram-bba35.firebaseapp.com",
  projectId: "imagigram-bba35",
  storageBucket: "imagigram-bba35.appspot.com",
  messagingSenderId: "694335861922",
  appId: "1:694335861922:web:3a97bb7b3f97c579c953fb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);