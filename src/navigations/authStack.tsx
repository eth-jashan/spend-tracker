import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/AuthStack/LoginScreen";
import SignupScreen from "../screens/AuthStack/SignupScreen";
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;