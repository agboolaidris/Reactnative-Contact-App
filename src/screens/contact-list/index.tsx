import React from "react";
import { useGlobalDispatch, useGlobalState } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
import { Typography } from "../../ui/atoms";
import ContactListComponent from "../../ui/compounds/contactList";
const ContactList = () => {
  return <ContactListComponent />;
};

export default ContactList;
