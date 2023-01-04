import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStack from "./authStack";

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default NavigationStack;
