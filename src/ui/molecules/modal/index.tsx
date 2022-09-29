import React from "react";
import { StyledModal } from "./style";
interface Props {
  visible: boolean;
}
function Modal({ visible }: Props) {
  return <StyledModal visible={visible}></StyledModal>;
}

export default Modal;
