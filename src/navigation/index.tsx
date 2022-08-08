import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./stack";
import { DrawerNavigation } from "./drawer";
import { useGlobalDispatch, useGlobalState } from "../store";
import { ActivityIndicator, SafeAreaView } from "react-native";
import axiosInstance from "../helpers/axiosIntance";
import { AUTHTYPE } from "../store/reducers/auth";
function Navigation() {
  const [isLoading, setisLoading] = useState(true);
  const { authInitialState } = useGlobalState();
  const dispatch = useGlobalDispatch();
  React.useEffect(() => {
    axiosInstance
      .get("/auth/isme")
      .then((res) => {
        console.log(res);
        setisLoading(false);
        dispatch({
          type: AUTHTYPE.LOGIN,
          payload: { user: res.data, isAuthenticated: true },
        });
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err.response.data, "dd");
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <NavigationContainer>
          {authInitialState.isAuthenticated ? (
            <DrawerNavigation />
          ) : (
            <PublicStack />
          )}
        </NavigationContainer>
      ) : (
        <SafeAreaView>
          <ActivityIndicator />
        </SafeAreaView>
      )}
    </>
  );
}

export default Navigation;
