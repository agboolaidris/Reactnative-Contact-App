import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./stack";
import { DrawerNavigation } from "./drawer";

function Navigation() {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigation /> : <PublicStack />}
    </NavigationContainer>
  );
}

export default Navigation;
