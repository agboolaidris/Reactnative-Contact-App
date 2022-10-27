import React, { useEffect } from "react";
import { useGlobalDispatch, useGlobalState } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
import { ContactTYPE } from "../../store/reducers/contact";
import { Typography } from "../../ui/atoms";
import ContactListComponent from "../../ui/compounds/contactList";
const ContactList = () => {
  const { contactInitialState } = useGlobalState();
  const dispatch = useGlobalDispatch();
  useEffect(() => {
    dispatch({ type: ContactTYPE.IS_LOADING });
    setTimeout(() => {
      dispatch({ type: ContactTYPE.FETCH_CONTACT });
    }, 5000);
  }, []);

  return (
    <ContactListComponent
      loading={contactInitialState.isloading}
      data={contactInitialState.data}
    />
  );
};

export default ContactList;
