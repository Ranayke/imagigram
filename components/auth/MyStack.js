import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Register } from "./Register";
import { Landing } from "./Landing";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Landing} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
