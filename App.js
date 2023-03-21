import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./components/auth/Landing";

const Stack = createStackNavigator;

const App = () => (
  <NavigationContainer>
    <Landing />
  </NavigationContainer>
);

export default App;
