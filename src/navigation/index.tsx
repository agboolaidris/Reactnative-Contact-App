import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./stack";
import { DrawerNavigation } from "./drawer";
import { useGlobalState } from "../store";

function Navigation() {
  const { authInitialState } = useGlobalState();
  console.log(authInitialState, "state");
  return (
    <NavigationContainer>
      {authInitialState.isAuthenticated ? (
        <DrawerNavigation />
      ) : (
        <PublicStack />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
