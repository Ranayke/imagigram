import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1KLFMA7hT_lroPkZxclbxLWRrh8YCULc",
  authDomain: "imagigram-test.firebaseapp.com",
  projectId: "imagigram-test",
  storageBucket: "imagigram-test",
  messagingSenderId: "X2040111446",
  appId: "1:2040111446:web:4cda287faa49ca727e76f7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);