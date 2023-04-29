import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import logo from "../../assets/images/Imagigram.png";

export function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: "43%", height: 210, marginBottom: 48 }}
        source={logo}
      />
      <Button
        style={{ marginTop: 12 }}
        icon="account-plus-outline"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>
      <Button
        style={{ marginTop: 12 }}
        icon="login-variant"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
    </View>
  );
}
