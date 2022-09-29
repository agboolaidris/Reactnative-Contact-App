import * as React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Route } from "../../../constants/route";
import { Typography, StyledSafeAreaView } from "../../atoms";
import { Alert, Pressable, SafeAreaView, View } from "react-native";
import AntiIcons from "@expo/vector-icons/AntDesign";
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
      icon: <AntiIcons name="contacts" color={getColor("black")} size={16} />,
      onPress: () => navigation.navigate(Route.ContactList),
    },
    {
      name: "Logout",
      icon: <AntiIcons name="logout" color={getColor("black")} size={16} />,
      onPress: handleLogout,
    },
  ];
  return (
    <StyledSafeAreaView>
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
    </StyledSafeAreaView>
  );
};

export default CustomerDrawer;
