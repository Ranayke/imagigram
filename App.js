import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { app } from "./database/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./redux/reducers";
import thunk from "redux-thunk";

import Main from "./components/Main";
import { Landing } from "./components/auth/Landing";
import { Register } from "./components/auth/Register";
import Login from "./components/auth/Login";

const Stack = createNativeStackNavigator();

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    });
  }, []);

  const LoggedIn = () => (
    <Provider store={store}>
      <Main />
    </Provider>
  );

  const Loading = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Carregando...</Text>
    </View>
  );

  const LoggedOut = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <LoggedIn />;
  }

  return <LoggedOut />;
}
