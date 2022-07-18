import { View, Text } from "react-native";
import React, { useState } from "react";
import TextInput from "../../molecules/inputs";
import MainWrapper from "../../molecules/Wrapper";
import { Typography } from "../../atoms";
import Button from "../../molecules/buttons";

const Login = () => {
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
        secureTextEntry={true}
      />
      <TextInput
        style={{ marginTop: 10 }}
        label="Email"
        value={value}
        onChangeText={handleChange}
        error="This field is required"
      />
      <Button title="Submit" style={{ marginTop: 10 }} />
      <Button title="Submit" loading={true} style={{ marginTop: 10 }} />
      <Button title="Submit" style={{ marginTop: 10 }} color="danger" loading />
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
