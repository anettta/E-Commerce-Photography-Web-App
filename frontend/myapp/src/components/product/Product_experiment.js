import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  const productMainImage = product && product.images[0].url;
  return (
    <Fragment>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Punny headline</h1>
          <p className="lead font-weight-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <Link className="btn btn-outline-secondary" to="#">
            Coming soon
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
          <div className="">
            <Link to={`/product/${product._id}`}>
              <img className="img-fluid" alt="img" src={productMainImage} />
            </Link>

            <div className="card-body d-flex flex-column">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "avenir", fontWeight: "400" }}
              >
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </h5>
              {/* <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
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
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div>
            <Link to={`/product/${product._id}`}>
              <img
                className="img-fluid bg-light shadow-sm mx-auto"
                alt="img"
                src={productMainImage}
                style={{
                  borderRadius: "21px 21px 0 0",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
        <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-white shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
