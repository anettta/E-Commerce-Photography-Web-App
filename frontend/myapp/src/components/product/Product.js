import React, { Fragment } from "react";

import { Link } from "react-router-dom";
const Product = ({ product, col }) => {
  const productMainImage = product && product.images[0].url;
  return (
    <>
      <div className={`col-sm-12 col-md-6 col-lg-${col} my-5  `}>
        {/* <div classNameName="mb-3">
        <span id="cat">{product.category.toUpperCase()}</span>
      </div> */}

        <Link to={`/product/${product._id}`}>
          <div className=" frame-style img-frame">
            <img className="img-fluid" alt="img" src={productMainImage} />
          </div>
        </Link>

        <div className="card-body d-flex flex-column">
          <h6
            className="card-title text-center mt-4"
            style={{
              fontFamily: "avenir",
              margin: "10px",
              fontWeight: "500",
            }}
          >
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h6>
          {/* <div classNameName="ratings mt-auto">
            <div classNameName="rating-outer">
              <div
                classNameName="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div> */}
          <p
            className="card-text text-center"
            style={{
              fontFamily: "avenir",
              fontWeight: "700",
            }}
          >
            ${product.price}
          </p>

          {/* <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Product;
