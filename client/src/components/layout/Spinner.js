import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loading"
        style={{ width: "200px", margin: "auto", display: "block" }}></img>
      <h1 className="text-center">LOADING....</h1>
    </>
  );
};

export default Spinner;
