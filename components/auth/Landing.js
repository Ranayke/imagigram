import React from "react";
import { Button, View, Text } from "react-native";

export function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Imagigram</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
