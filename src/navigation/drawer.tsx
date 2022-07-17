import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactList from "../screens/contact-list";
import CreateContact from "../screens/create-contact";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={ContactList} />
      <Drawer.Screen name="Notifications" component={CreateContact} />
    </Drawer.Navigator>
  );
};
