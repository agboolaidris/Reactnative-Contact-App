import { View, Text } from "react-native";
import React from "react";
import { Typography } from "../../ui/atoms";
import Button from "../../ui/molecules/buttons";
import MainWrapper from "../../ui/molecules/Wrapper";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../constants/route";
import RegisterComponent from "../../ui/compounds/register";

const Register = () => {
  const { navigate } = useNavigation<any>();
  return <RegisterComponent />;
};

export default Register;
