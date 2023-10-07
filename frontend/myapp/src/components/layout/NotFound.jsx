import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const notFoundStyle = {
    color: "#3bb293",
    textDecoration: "none",
  };
  return (
    <div>
      <div className="row">
        <div className="d-flex justify-content-center page-not-found-wrapper ">
          {/* <img
            src="../images/404.svg"
            height="550"
            width="550"
            alt="404_not_found"
          /> */}
        </div>
        <h3 className="text-center" style={notFoundStyle}>
          Page Not Found.
          <br /> Go
          <Link style={notFoundStyle} to="/">
            <span> Home</span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
