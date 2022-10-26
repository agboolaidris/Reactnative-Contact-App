import React from "react";
import {
  TouchableOpacity,
  Modal as NativeModal,
  View,
  Pressable,
} from "react-native";
import { Typography } from "../../atoms";
import { ModalWrapper } from "./style";
interface Props {
  visible: boolean;
  handleClose?: () => void;
}
function Modal({ visible, handleClose }: Props) {
  return (
    <NativeModal visible={visible} transparent>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => handleClose && handleClose()}
        ></Pressable>
        <ModalWrapper>
          <Typography></Typography>
        </ModalWrapper>
      </View>
    </NativeModal>
  );
}

export default Modal;
