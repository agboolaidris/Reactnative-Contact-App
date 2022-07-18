import styled from "@emotion/native";
import { ColorType, getColor } from "../../../assets/theme/colors";

interface Props {
  color?: ColorType;
}
export const ButtonWrapper = styled.View<Props>`
  background-color: ${({ color }) => getColor(color || "grey")};
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
