import React from "react";
import { useGlobalDispatch } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
import { StyledView, Typography } from "../../ui/atoms";

const ContactList = () => {
  const dispatch = useGlobalDispatch();

  return (
    <StyledView>
      <Typography>ContactList</Typography>
      {/* <Button
        title="Login out"
        onPress={() =>
          dispatch({
            type: AUTHTYPE.LOGIN,
            payload: { isAuthenticated: false },
          })
        }
      /> */}
    </StyledView>
  );
};

export default ContactList;
