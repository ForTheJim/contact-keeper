import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists!") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disabled-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;
  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please Enter All Fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 form-container">
      <h2 className="text-center text-2xl p-4">
        Account <span className="text-purple-900">Register</span>
      </h2>
      <form className="m-2 p-2 md:m-4 md:p-4" onSubmit={onSubmit}>
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-lg leading-5 font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-lg leading-5 font-medium text-gray-900">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className="block text-lg leading-5 font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="8"
            className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="password2"
            className="block text-lg leading-5 font-medium text-gray-900">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="8"
            className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
          />
        </div>
        <button
          type="submit"
          value="Register"
          className="hover:bg-purple-700 bg-purple-500 block rounded p-3 font-semibold text-2xl  md:text-lg m-3 text-white border border-purple-900 w-11/12 md:w-5/12">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
