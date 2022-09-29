import { Platform } from "react-native";
import styled from "@emotion/native";
export const StyledSafeAreaView = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? "25px" : "0px"};
`;
