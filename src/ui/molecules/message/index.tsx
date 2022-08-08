import { Pressable } from "react-native";
import React, { useState } from "react";
import { MessageWrapper } from "./style";
import { Typography } from "../../atoms";
import { ColorType } from "../../../assets/theme/colors";

interface Props {
  content: string;
  onCancel?: () => void;
  display: boolean;
  type: ColorType;
}
const Message = ({ content, display, onCancel, type }: Props) => {
  return (
    <Pressable>
      {display ? (
        <MessageWrapper direction="row" bgColor={type}>
          <Typography color="white">{content}</Typography>
          <Pressable onPress={() => onCancel && onCancel()}>
            <Typography color="white">X</Typography>
          </Pressable>
        </MessageWrapper>
      ) : null}
    </Pressable>
  );
};

export default Message;
