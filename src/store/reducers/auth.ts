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

export const AUTHTYPE = {
  LOGIN: "LOGIN",
};

export const AuthReducer = (
  state: AuthIntialState,
  { payload, type }: AuthActionProps
) => {
  switch (type) {
    case AUTHTYPE.LOGIN:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
