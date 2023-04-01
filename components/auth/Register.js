import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../../database/firebaseConfig";

export function Register({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const auth = getAuth(app);
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      console.log(data)
    } catch (err) {
      console.log('err: ', err)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="Nome" onChangeText={setName} />
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
