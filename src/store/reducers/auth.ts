export interface AuthIntialState {
  isAuthenticated: boolean;
}

export interface AuthActionProps {
  type: string;
  payload: AuthIntialState;
}

export const authInitialState: AuthIntialState = {
  isAuthenticated: false,
};

export const AuthReducer = (
  state: AuthIntialState,
  { payload, type }: AuthActionProps
) => {
  switch (type) {
    case "LOGIN":
      console.log("hh");
      return {
        ...state,
        ...payload,
      };
      break;

    default:
      return state;
      break;
  }
};
