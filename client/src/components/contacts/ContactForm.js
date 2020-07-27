import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ConatactForm = () => {
  const contactContext = useContext(ContactContext);
  const {
    addContact,
    current,
    clearCurrentContact,
    updateContact,
  } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const handleInputChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrentContact();
  };

  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={handleFormSubmit}>
      <h2 className="m-4 p-4 bg-transparent text-black font-semibold text-center text-xl">
        {current ? "Update Contact" : "Add Contact"}
      </h2>
      <input
        className="bg-white placeholder-gray-900 md:text-lg focus:outline-none focus:shadow-outline border border-gray-500 text-gray-700 rounded-lg p-3 m-3 w-11/12 text-lg"
        type="text"
        placeholder="Contact Name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <input
        className="bg-white placeholder-gray-900 md:text-lg focus:outline-none focus:shadow-outline border border-gray-500 text-gray-700 rounded-lg p-3 m-3 w-11/12 text-lg"
        type="email"
        name="email"
        value={email}
        placeholder="myname@example.com"
        onChange={handleInputChange}
      />
      <input
        className="bg-white placeholder-gray-900 md:text-lg focus:outline-none focus:shadow-outline border border-gray-500 text-gray-700 rounded-lg p-3 m-3 text-lg w-11/12"
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleInputChange}
      />
      <select
        name="type"
        value={type}
        onChange={handleInputChange}
        className="form-select p-3 m-3 font-semibold border border-gray-500 rounded-lg bg-transparent text-gray-900 text-lg w-11/12">
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
      </select>

      <div>
        <button className="hover:bg-purple-700 bg-purple-500 block rounded p-3 font-semibold text-2xl  md:text-lg m-3 text-white border border-purple-900 w-11/12 md:w-5/12">
          {current ? "Update Contact" : "Add Contact"}
        </button>
      </div>
      {current && (
        <div>
          <button
            onClick={clearAll}
            className="hover:bg-gray-900 bg-transparent block rounded p-3 font-semibold text-2xl  md:text-lg m-3 hover:text-gray-200 text-gray-700 border border-black w-11/12 md:w-5/12">
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ConatactForm;
