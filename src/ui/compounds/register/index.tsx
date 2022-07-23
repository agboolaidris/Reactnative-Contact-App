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
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
}

const Register = ({ handleChange, handleSubmit, errors, values }: Props) => {
  const { navigate } = useNavigation<any>();
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };
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
          Please Register here
        </Typography>
      </View>

      <TextInput
        label="First Name"
        value={values.firstName}
        onChangeText={(value) => handleChange("firstName", value)}
        error={errors.firstName}
      />

      <TextInput
        style={{ marginTop: 10 }}
        label="Last Name"
        value={values.lastName}
        onChangeText={(value) => handleChange("lastName", value)}
        error={errors.lastName}
      />
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
      />

      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Typography>Already have an acount?</Typography>
        <Pressable onPress={() => navigate(Route.Login)}>
          <Typography color="danger" style={{ marginLeft: 10 }}>
            Login
          </Typography>
        </Pressable>
      </View>
    </MainWrapper>
  );
};

export default Register;
