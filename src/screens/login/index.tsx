import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useGlobalDispatch } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
import TextInput from "../../ui/molecules/inputs";
import MainWrapper from "../../ui/molecules/Wrapper";
import { Typography } from "../../ui/atoms";

const Login = () => {
  const dispatch = useGlobalDispatch();
  const [value, setvalue] = useState("");
  const handleChange = (v: string) => {
    setvalue(v);
  };
  return (
    <MainWrapper style={{ marginTop: 30 }}>
      <TextInput
        label="Email"
        value={value}
        onChangeText={handleChange}
        icon={<Typography>Hide</Typography>}
      />
      <TextInput
        style={{ marginTop: 10 }}
        label="Email"
        value={value}
        onChangeText={handleChange}
        icon={<Typography>Hide</Typography>}
        iconPosition="right"
      />
      <TextInput
        style={{ marginTop: 10 }}
        label="Email"
        value={value}
        onChangeText={handleChange}
        error="This field is required"
      />

      {/* <Button
        title="Login"
        onPress={() =>
          dispatch({ type: AUTHTYPE.LOGIN, payload: { isAuthenticated: true } })
        }
      /> */}
    </MainWrapper>
  );
};

export default Login;
