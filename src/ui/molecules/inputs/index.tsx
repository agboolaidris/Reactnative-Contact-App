import { StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { TextInputStyled, TextInputWrapper } from "./style";
import { StyledView, Typography } from "../../atoms";

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
    <StyledView style={style}>
      <Typography>{label}</Typography>
      <TextInputWrapper
        flex={iconPosition === "right" ? "reverse" : "row"}
        error={!!error}
      >
        {icon && icon}
        <TextInputStyled
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
        />
      </TextInputWrapper>
      {error && <Typography color="danger">{error}</Typography>}
    </StyledView>
  );
};

export default TextInput;
