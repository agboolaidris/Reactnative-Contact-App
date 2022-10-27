import React, { createContext, ReactNode, useReducer, useContext } from "react";
import {
  AuthReducer,
  authInitialState,
  AuthIntialStateProps,
  AuthActionProps,
} from "./reducers/auth";
import {
  ContactActionProps,
  ContactReducer,
  contactInitialState,
  ContactIntialStateProps,
} from "./reducers/contact";

interface Props {
  children: ReactNode;
}

interface InitialStateProps {
  authInitialState: AuthIntialStateProps;
  contactInitialState: ContactIntialStateProps;
}

const initialState: InitialStateProps = {
  authInitialState,
  contactInitialState,
};

const StateContext = createContext<InitialStateProps>(initialState);
const DispatchContext = createContext<React.Dispatch<any>>(() => null);

const globalReducer = (
  { authInitialState, contactInitialState }: InitialStateProps,
  action: any
) => ({
  contactInitialState: ContactReducer(contactInitialState, action),
  authInitialState: AuthReducer(authInitialState, action),
});

const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default StoreProvider;
export const useGlobalState = () => useContext(StateContext);
export const useGlobalDispatch = () => useContext(DispatchContext);
