import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const {
    deleteContact,
    setCurrentContact,
    clearCurrentContact,
  } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };

  const onEdit = () => {
    setCurrentContact(contact);
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg relative border border-gray-400 m-2"
      key={_id}>
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional"
              ? "items-center shadow bg-green-500 p-2 text-white absolute top-0 right-0"
              : "items-center shadow bg-indigo-500 p-2 text-white absolute top-0 right-0")
          }>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            {" "}
            <FontAwesomeIcon icon={faEnvelopeOpen} /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="items-center shadow bg-purple-500 p-3 rounded-full text-white hover:bg-purple-800 m-1"
          onClick={onEdit}>
          Edit
        </button>
        <button
          className="items-center shadow bg-red-500 rounded-full p-3 text-white hover:bg-red-800 m-1 "
          onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
