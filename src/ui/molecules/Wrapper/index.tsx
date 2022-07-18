import { View, Text, StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { Container, Wrapper } from "../../atoms";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const MainWrapper = ({ children, style }: Props) => {
  return (
    <Wrapper>
      <Container style={style}>{children}</Container>
    </Wrapper>
  );
};

export default MainWrapper;
