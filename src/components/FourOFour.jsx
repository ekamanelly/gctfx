import React from "react";
import { Link } from "react-router-dom";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const FourOFour = (prop) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <h1>404</h1>
      <Link to="/">Come Home </Link>
    </>
  );
};

export default FourOFour;
