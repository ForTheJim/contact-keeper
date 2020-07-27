import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disabled-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Login SUBMIT");
    if (email === "" || password === "") {
      setAlert("Please Fill in All Fields", "danger");
    } else {
      loginUser({
        email,
        password,
      });
    }
  };

  return (
    <div className="grid grid-cols-1">
      <h2 className="text-center text-2xl p-4">
        Account <span className="text-purple-900">Login</span>
      </h2>
      <form className="m-2 p-2 md:m-4 md:p-4" onSubmit={onSubmit}>
        <div className="form-group">
          <label
            className="block text-lg leading-5 font-medium text-gray-900"
            htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label
            className="block leading-5 font-medium text-gray-900 text-lg"
            htmlFor="password">
            Password
          </label>
          <input
            className="bg-white  md:text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg p-3 m-3 w-11/12 text-lg"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button
          value="Login"
          className="hover:bg-purple-700 bg-purple-500 block rounded p-3 font-semibold text-2xl  md:text-lg m-3 text-white border border-purple-900 w-11/12 md:w-5/12">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
