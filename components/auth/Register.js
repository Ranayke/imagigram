import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export function Register({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    return;
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
