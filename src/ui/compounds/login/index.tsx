import React, { useState } from "react";
import TextInput from "../../molecules/inputs";
import MainWrapper from "../../molecules/Wrapper";
import { Typography } from "../../atoms";
import Button from "../../molecules/buttons";
import { Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../../constants/route";

const Login = () => {
  const [value, setvalue] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const handleChange = (v: string) => {
    setvalue(v);
  };
  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };
  const { navigate } = useNavigation<any>();
  return (
    <MainWrapper style={{ marginTop: 30 }}>
      <Image
        source={require("../../../assets/icon.png")}
        style={{
          width: 100,
          height: 70,
          alignSelf: "center",
          marginTop: 70,
        }}
      />
      <View
        style={{
          alignSelf: "center",
          marginVertical: 20,
        }}
      >
        <Typography color="danger" varaint="title">
          Welcome to ContactUI
        </Typography>
        <Typography varaint="subTitle" style={{ textAlign: "center" }}>
          Please Login here
        </Typography>
      </View>

      <TextInput label="Email" value={value} onChangeText={handleChange} />
      <TextInput
        style={{ marginTop: 10 }}
        label="passowrd"
        value={value}
        onChangeText={handleChange}
        icon={
          <Pressable onPress={handleShowPassword}>
            <Typography>{showPassword ? "Hide" : "Show"}</Typography>
          </Pressable>
        }
        iconPosition="right"
        secureTextEntry={!showPassword}
      />

      <Button title="Submit" style={{ marginTop: 20 }} color="danger" loading />

      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Typography>Need a new account?</Typography>
        <Pressable onPress={() => navigate(Route.Register)}>
          <Typography color="danger" style={{ marginLeft: 10 }}>
            Register
          </Typography>
        </Pressable>
      </View>
    </MainWrapper>
  );
};

export default Login;