import { View, Text } from "react-native";
import React from "react";
import { EmptyDataWrapper } from "./style";
import { Typography } from "../../atoms";
import { FontAwesome5 } from "@expo/vector-icons";
import { getColor } from "../../../assets/theme/colors";
import Button from "../buttons";

interface IEmptyComponent {
  content: string;
}

export default function EmptyComponent({ content }: IEmptyComponent) {
  return (
    <EmptyDataWrapper>
      <View>
        <View style={{ alignItems: "center" }}>
          <FontAwesome5 name="box-open" size={100} color={getColor("danger")} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Typography style={{ textAlign: "center", fontSize: 24 }}>
            Nothing!!!
          </Typography>
          <View style={{ marginTop: 5 }}>
            <Typography style={{ textAlign: "center" }}>{content}</Typography>
          </View>
        </View>
        <Button title="Go back home" style={{ marginTop: 20 }} />
      </View>
    </EmptyDataWrapper>
  );
}
