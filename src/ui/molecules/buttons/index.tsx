import {
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { Typography } from "../../atoms";
import { ButtonWrapper } from "./style";
import { ColorType, getColor } from "../../../assets/theme/colors";

interface Props {
  disabled?: boolean;
  loading?: boolean;
  title: string;
  onPress?: () => void;
  color?: ColorType;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ title, loading, style, disabled, color, onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && { opacity: 0.7 }}
      onPress={disabled ? null : onPress && onPress}
    >
      <ButtonWrapper style={style} color={disabled ? "grey" : color}>
        {loading ? (
          <ActivityIndicator
            color={color === "grey" ? getColor("black") : getColor("white")}
          />
        ) : (
          <Typography color={color === "grey" ? "black" : "white"}>
            {title}
          </Typography>
        )}
      </ButtonWrapper>
    </Pressable>
  );
};

export default Button;
