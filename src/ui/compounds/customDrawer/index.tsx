import * as React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Route } from "../../../constants/route";
import { Typography } from "../../atoms";
import { Alert, Pressable, SafeAreaView, View } from "react-native";
import { CustomDrawerStyled } from "./styled";
import { getColor } from "../../../assets/theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalDispatch } from "../../../store";
import { AUTHTYPE } from "../../../store/reducers/auth";

const CustomerDrawer = ({ navigation }: DrawerContentComponentProps) => {
  const dispatch = useGlobalDispatch();
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you sure you want to logout", [
      { text: "Cancel" },
      {
        text: "Ok",
        onPress: () => {
          AsyncStorage.removeItem("token");
          dispatch({ type: AUTHTYPE.LOGOUT, payload: {} });
        },
      },
    ]);
  };
  const menuItems = [
    {
      name: "Contact List Page",
      icon: <Typography>IT</Typography>,
      onPress: () => navigation.navigate(Route.ContactList),
    },
    {
      name: "Logout",
      icon: <Typography>IT</Typography>,
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      {menuItems.map((menu, index) => {
        return (
          <Pressable
            key={index}
            onPress={menu.onPress}
            style={({ pressed }) =>
              pressed && { backgroundColor: getColor("success") }
            }
          >
            <CustomDrawerStyled>
              {menu.icon}
              <Typography style={{ marginLeft: 10 }}>{menu.name}</Typography>
            </CustomDrawerStyled>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default CustomerDrawer;
