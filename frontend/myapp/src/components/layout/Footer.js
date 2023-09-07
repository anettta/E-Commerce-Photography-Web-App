import React, { Fragment } from "react";

const Footer = () => {
  const date = new Date();

  return (
    <Fragment>
      <footer className="py-1">
        <p className="text-center mt-1" style={{ color: "#36454f" }}>
          Anna Gapyuk Creative Studio &copy; {date.getFullYear()}
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
