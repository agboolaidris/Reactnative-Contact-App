import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Typography } from "../../atoms";
import Button from "../../molecules/buttons";
import Modal from "../../molecules/modal";

function ContactList() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View>
      <Modal visible={openModal} handleClose={() => setOpenModal(false)} />

      <Typography>ContactList</Typography>
      <Button
        title="Open Modal"
        color="accent"
        onPress={() => setOpenModal(true)}
      />
    </View>
  );
}

export default ContactList;
