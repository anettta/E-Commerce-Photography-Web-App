import React, { Fragment } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const Product = ({ product, columnSize }) => {
  return (
    <>
      <div className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3  `}>
        {/* <div classNameName="mb-3"> 
        <span id="cat">{product.category.toUpperCase()}</span>
      </div> */}

        <Link to={`/product/${product?._id}`}>
          <div className="container-custom  rounded products">
            <img
              className="img-fluid card-img-top mx-auto "
              alt={product?.name}
              src={
                product?.images[0]
                  ? product?.images[0]?.url
                  : "https://res.cloudinary.com/ducc0wskb/image/upload/v1695668560/Anna_Gapyuk_1_copy_9_bhk8ly.png"
              }
            />

            <div className="top-left badge badge-info card-text ">
              ${product?.price}
            </div>
          </div>
        </Link>
        <div className="ratings mt-auto d-flex">
          <StarRatings
            rating={product?.ratings}
            starRatedColor="#14927d"
            numberOfStars={5}
            name="rating"
            starDimension="22px"
            starSpacing="1px"
          />
          <span id="no_of_reviews" className="pt-2 ps-2">
            ({product?.numOfReviews})
          </span>
        </div>
        <div className="card-body d-flex flex-column">
          {/* <h6
            className="card-title text-center mt-4"
            style={{
              fontFamily: "avenir",
              margin: "10px",
              fontWeight: "500",
            }}
          >
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h6> 
         
         
          </div> 
          {/* <p
            className="card-text text-center"
            style={{
              fontFamily: "avenir",
              fontWeight: "700",
            }}
          >
            ${product.price}
          </p> */}

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
