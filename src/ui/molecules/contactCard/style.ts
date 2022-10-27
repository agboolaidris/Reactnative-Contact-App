import styled from "@emotion/native";
import { getColor } from "../../../assets/theme/colors";

export const ContactCardWrapper = styled.View`
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const CardImgWrapper = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("grey")};
  border-radius: 40px;
`;
