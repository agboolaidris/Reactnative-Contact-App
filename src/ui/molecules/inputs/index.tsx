import { StyleProp, ViewStyle, View } from "react-native";
import React, { ReactNode } from "react";
import { TextInputStyled, TextInputWrapper } from "./style";
import { Typography } from "../../atoms";

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  label: string;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  iconPosition?: "left" | "right";
  error?: string;
  secureTextEntry?: boolean;
}
const TextInput = ({
  value,
  onChangeText,
  label,
  icon,
  style,
  iconPosition,
  error,
  secureTextEntry,
}: Props) => {
  return (
    <View style={style}>
      <Typography>{label}</Typography>
      <TextInputWrapper
        direction={iconPosition === "right" ? "reverse" : "row"}
        error={!!error}
      >
        {icon && icon}
        <TextInputStyled
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
        />
      </TextInputWrapper>
      {typeof error === "string" && (
        <Typography color="danger">{error}</Typography>
      )}
    </View>
  );
};

export default TextInput;
