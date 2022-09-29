import React, { useState } from "react";
import TextInput from "../../molecules/inputs";
import MainWrapper from "../../molecules/Wrapper";
import { Typography } from "../../atoms";
import Button from "../../molecules/buttons";
import { Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../../constants/route";

interface Props {
  values: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
  };
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
  loading?: boolean;
}
const Login = ({
  handleChange,
  handleSubmit,
  errors,
  values,
  loading,
}: Props) => {
  const [showPassword, setshowPassword] = useState(false);

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

      <TextInput
        style={{ marginTop: 10 }}
        label="Email"
        value={values.email}
        onChangeText={(value) => handleChange("email", value)}
        error={errors.email}
      />
      <TextInput
        style={{ marginTop: 10 }}
        label="passowrd"
        value={values.password}
        onChangeText={(value) => handleChange("password", value)}
        error={errors.password}
        icon={
          <Pressable onPress={handleShowPassword}>
            <Typography>{showPassword ? "Hide" : "Show"}</Typography>
          </Pressable>
        }
        iconPosition="right"
        secureTextEntry={!showPassword}
      />

      <Button
        title="Submit"
        style={{ marginTop: 20 }}
        color="danger"
        onPress={handleSubmit}
        loading={loading}
      />

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
