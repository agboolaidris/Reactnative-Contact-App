import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactList from "../screens/contact-list";
import CreateContact from "../screens/create-contact";
import { Route } from "../constants/route";

const Drawer: any = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName={Route.ContactList}>
      <Drawer.Screen name={Route.ContactList} component={ContactList} />
      <Drawer.Screen name={Route.CreateContact} component={CreateContact} />
    </Drawer.Navigator>
  );
};
