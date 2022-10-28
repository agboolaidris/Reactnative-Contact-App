import { View, Pressable } from "react-native";
import React from "react";
import { CardImgWrapper, ContactCardWrapper } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { getColor } from "../../../assets/theme/colors";
import { Typography } from "../../atoms";

interface IContactCard {
  firstName: string;
  lastName: string;
  phone: string;
}
const ContactCard = ({ firstName, lastName, phone }: IContactCard) => {
  return (
    <Pressable>
      <ContactCardWrapper>
        <View style={{ flexDirection: "row" }}>
          <CardImgWrapper>
            <Typography color="white">
              {firstName[0]}
              {lastName[0]}
            </Typography>
          </CardImgWrapper>
          <View style={{ paddingHorizontal: 10 }}>
            <Typography style={{ fontSize: 16 }}>
              {firstName}
              {"  "}
              {lastName}
            </Typography>
            <Typography style={{ opacity: 0.7, marginTop: 4 }}>
              {phone}
            </Typography>
          </View>
        </View>
        <AntDesign name="right" size={20} color={getColor("grey")} />
      </ContactCardWrapper>
    </Pressable>
  );
};

export default ContactCard;
