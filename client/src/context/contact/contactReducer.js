import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        //Return Contacts that are not current id being delete
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        loading: false,
        contacts: null,
        current: null,
        filterd: null,
        error: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        loading: false,
        //Return Contacts that are current id being edited
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        loading: false,
        //Return Contacts that are current id being edited
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: false,
        //Return Contacts that are current id being edited
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        loading: false,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };

    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_CONTACTS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
