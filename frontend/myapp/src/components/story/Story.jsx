import React from "react";

import { Link } from "react-router-dom";
const Story = ({ story }) => {
  return (
    <div className="col-12 col-4">
      <div className="d-flex justify-content-center align-items-center">
        <Link to={`/stories/${story._id}`}>
          <div className="container-custom  rounded products">
            <img
              className="img-fluid card-img-top mx-auto "
              alt={story?.title}
              src={
                story?.images[0]
                  ? story?.images[0]?.url
                  : "https://res.cloudinary.com/ducc0wskb/image/upload/v1695668560/Anna_Gapyuk_1_copy_9_bhk8ly.png"
              }
            />
            <div className="bottom-left badge badge-info card-text mt-2">
              {story?.title}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Story;
