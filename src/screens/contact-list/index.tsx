import { View, Text, Button } from "react-native";
import React from "react";
import { useGlobalDispatch } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";

const ContactList = () => {
  const dispatch = useGlobalDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ContactList</Text>
      <Button
        title="Login out"
        onPress={() =>
          dispatch({
            type: AUTHTYPE.LOGIN,
            payload: { isAuthenticated: false },
          })
        }
      />
    </View>
  );
};

export default ContactList;
