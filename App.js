import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { app } from "./database/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/auth";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./redux/reducers";
import thunk from "redux-thunk";

import Main from "./components/Main";
import { Landing } from "./components/auth/Landing";
import { Register } from "./components/auth/Register";
import Login from "./components/auth/Login";
import Add from "./components/main/Add";
import Save from "./components/main/Save";
import Comment from './components/main/Comment';

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="Save" component={Save} />
          <Stack.Screen name='Comment' component={Comment} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

  const Loading = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Carregando...</Text>
    </View>
  );

  const LoggedOut = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
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
