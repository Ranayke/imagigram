import React from "react";
import { Button, View, Text } from "react-native";

export function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: "1rem" }}>Welcome to Imagigram</Text>
      <View style={{ marginBottom: "1rem" }}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
