import { View, Text, Button } from "react-native";
import React from "react";
import { useGlobalDispatch } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";

const Login = () => {
  const dispatch = useGlobalDispatch();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() =>
          dispatch({ type: AUTHTYPE.LOGIN, payload: { isAuthenticated: true } })
        }
      />
    </View>
  );
};

export default Login;
