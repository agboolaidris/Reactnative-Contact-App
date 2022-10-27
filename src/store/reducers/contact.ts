import { contactList } from "../../constants/contact";

export interface ContactIntialStateProps {
  isloading: boolean;
  data: any[];
}

export interface ContactActionProps {
  type: string;
  payload: ContactIntialStateProps;
}

export const contactInitialState: ContactIntialStateProps = {
  isloading: false,
  data: [],
};

export const ContactTYPE = {
  IS_LOADING: "ISLOADING",
  FETCH_CONTACT: "fetch-contact",
};

export const ContactReducer = (
  state: ContactIntialStateProps,
  { payload, type }: ContactActionProps
) => {
  switch (type) {
    case ContactTYPE.IS_LOADING:
      return {
        ...state,
        isloading: true,
      };
    case ContactTYPE.FETCH_CONTACT:
      return {
        ...state,
        isloading: false,
        data: contactList,
      };
    default:
      return state;
  }
};
