import { View, Text } from "react-native";
import React from "react";
import { StyledView, Typography } from "../../ui/atoms";

const CreateContact = () => {
  return (
    <StyledView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Typography>Create Contact</Typography>
    </StyledView>
  );
};

export default CreateContact;
