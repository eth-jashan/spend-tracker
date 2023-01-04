import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStack from "./authStack";

const NavigationStack: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default NavigationStack;
