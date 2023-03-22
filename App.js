import * as React from "react";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./components/auth/MyStack";

const firebaseConfig = {
  apiKey: "AIzaSyAXDixVFg5ofXBRytK03T_RJBaTTFnh0pE", // Exposto por fins didaticos. Pode ser utilizado dotenv por exemplo
  authDomain: "imagigram-bba35.firebaseapp.com",
  projectId: "imagigram-bba35",
  storageBucket: "imagigram-bba35.appspot.com",
  messagingSenderId: "694335861922",
  appId: "1:694335861922:web:3a97bb7b3f97c579c953fb",
};

if (firebase.apps.length === 0) {
  const app = initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
