import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const { filterContacts, clearFilter, filtered } = contactContext;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (event) => {
    if (text.current.value !== "") {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        className="bg-white placeholder-gray-900 md:text-lg focus:outline-none focus:shadow-outline border border-gray-500 text-gray-700 rounded-lg p-3 m-3 text-lg w-11/12"
        ref={text}
        type="text"
        placeholder="Type to Filter Contact List"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
