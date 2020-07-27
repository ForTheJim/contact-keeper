import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faPenFancy,
  faPenSquare,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logoutUser();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li className="absolute right-0 top-0 p-2">
        <a className="text-white" onClick={onLogout} href="#!">
          <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="text-right text-lg p-2">
        <Link to="/login">
          Login
          <FontAwesomeIcon icon={faSignInAlt} className="ml-1" />
        </Link>
      </li>
      <li className="text-right text-lg p-2">
        <Link className="link" to="/register">
          Create Account
          <FontAwesomeIcon icon={faPenSquare} className="ml-1" />
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300">
      <h1 className="text-white md:text-center md:text-3xl p-1 text-lg text-left">
        <FontAwesomeIcon className="mr-2" icon={faAddressCard} />
        {title}
      </h1>
      <ul className="text-white p-1">
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
};

export default Navbar;
