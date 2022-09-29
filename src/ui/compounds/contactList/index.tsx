import React from "react";
import { View } from "react-native";
import { Typography } from "../../atoms";
import Modal from "../../molecules/modal";

function ContactList() {
  return (
    <View>
      <Modal visible={false} />
      <Typography>ContactList</Typography>
    </View>
  );
}

export default ContactList;
