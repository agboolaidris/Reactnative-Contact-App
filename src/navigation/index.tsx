import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateStack, PublicStack } from "./stack";

function Navigation() {
  return (
    <NavigationContainer>
      {/* <PublicStack /> */}
      <PrivateStack />
    </NavigationContainer>
  );
}

export default Navigation;
