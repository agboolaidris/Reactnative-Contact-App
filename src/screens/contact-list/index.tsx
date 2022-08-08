import React from "react";
import { useGlobalDispatch, useGlobalState } from "../../store";
import { AUTHTYPE } from "../../store/reducers/auth";
import { StyledView, Typography } from "../../ui/atoms";

const ContactList = () => {
  const dispatch = useGlobalDispatch();
  const { authInitialState } = useGlobalState();

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
      <Typography>
        {authInitialState.user?.firstname}
        {authInitialState.user?.lastname}
      </Typography>
    </StyledView>
  );
};

export default ContactList;
