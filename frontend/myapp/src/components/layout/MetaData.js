import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Anna Gapyuk Creative Studio`}</title>
    </Helmet>
  );
};

export default MetaData;
