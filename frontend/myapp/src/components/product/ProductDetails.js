import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { addItemToCart } from "../../actions/cartActions";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import ListReviews from "../review/ListReviews";
import Product from "./Product";
import NotFound from "../layout/NotFound";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { user } = useSelector((state) => state.auth);
  const { error: reviewError, success } = useSelector(
    (state) => state.newReview
  );
  const { products } = useSelector((state) => state.products);
  const currentCategory = product.category;
  const currentProductId = product._id;
  let filteredProducts = products.filter(
    (product) =>
      product.category === currentCategory && product._id !== currentProductId
  );

  useEffect(() => {
    dispatch(getProductDetails(params.id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review posted successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
  }, [dispatch, success, alert, error, reviewError, params.id]);

  const increaseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber >= product.stock) {
      return;
    }
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber <= 1) {
      return;
    }
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  const addToCart = () => {
    dispatch(addItemToCart(params.id, quantity));
    alert.success("Item Added to Cart");
  };
  const setUserRatings = () => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      star.starValue = index + 1;

      ["click", "mouseover", "mouseout"].forEach(function (e) {
        star.addEventListener(e, showRatings);
      });
    });
    function showRatings(e) {
      stars.forEach((star, index) => {
        if (e.type === "click") {
          if (index < this.starValue) {
            star.classList.add("starColorClick");
            setRating(this.starValue);
          } else {
            star.classList.remove("starColorClick");
          }
        }
        if (e.type === "mouseover") {
          if (index < this.starValue) {
            star.classList.add("starColorMouseOver");
          } else {
            star.classList.remove("starColorMouseOver");
          }
        }
        if (e.type === "mouseout") {
          star.classList.remove("starColorMouseOver");
        }
      });
    }
  };

  const reviewHandler = () => {
    const formData = new FormData();
    formData.set("rating", rating);
    formData.set("comment", comment);
    formData.set("productId", params.id);

    dispatch(newReview(formData));
  };

  if (error && error?.status === 404) {
    return <NotFound />;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          <div className="row d-flex justify-content-around ">
            <div className="col-12 col-lg-5 mt-5" id="product_image">
              <Carousel pause="hover">
                {product.images &&
                  product.images.map((image) => (
                    <Carousel.Item key={image.public_id}>
                      <img
                        className="d-block w-100 img-fluid "
                        src={image.url}
                        alt={product.title}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h3>{product.name}</h3>
              <p id="product_id">Product # {product._id}</p>

              <hr />

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.ratings / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

              <hr />

              <p id="product_price">${product.price}</p>
              <div className="stockCounter d-inline">
                <span
                  className="btn minus"
                  style={{ backgroundColor: "#36454f", color: "#f0faf7" }}
                  onClick={decreaseQty}
                >
                  -
                </span>

                <input
                  type="number"
                  className="form-control count d-inline"
                  value={quantity}
                  readOnly
                />

                <span
                  className="btn plus"
                  onClick={increaseQty}
                  style={{ backgroundColor: "#36454f", color: "#f0faf7" }}
                >
                  +
                </span>
              </div>
              <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ml-4"
                disabled={product.stock === 0}
                onClick={addToCart}
              >
                Add to Cart
              </button>

              <hr />

              <p>
                Status:
                <span
                  id="stock_status"
                  className={product.stock > 0 ? "greenColor" : "redColor"}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              <hr />

              <h4 className="mt-2">Description:</h4>
              <p>{product.description}</p>
              <hr />
              <p id="product_seller mb-3">
                Sold by: <strong>{product.seller}</strong>
              </p>

              {user ? (
                <button
                  id="review_btn"
                  type="button"
                  className="btn btn-primary mt-4"
                  data-toggle="modal"
                  data-target="#ratingModal"
                  onClick={setUserRatings}
                >
                  Submit Your Review
                </button>
              ) : (
                <div className="alert alert-danger mt-5" type="alert">
                  Login to post your review
                </div>
              )}

              <div className="row mt-2 mb-5">
                <div className="rating w-50">
                  <div
                    className="modal fade"
                    id="ratingModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ratingModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">
                            Submit Review
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul className="stars">
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="star">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>

                          <textarea
                            name="review"
                            id="review"
                            className="form-control mt-3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>

                          <button
                            className="btn my-3 float-right review-btn px-4 text-white"
                            onClick={reviewHandler}
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Fragment>
              <div className="col-12 col-md-6 text-center ">
                {filteredProducts.length > 0 && <h1>Related Products</h1>}
              </div>

              <div className="row">
                {filteredProducts.map((product) => (
                  <Product key={product._id} product={product} col={4} />
                ))}
              </div>
            </Fragment>
          </div>

          {product.reviews && product.reviews.length > 0 && (
            <ListReviews reviews={product.reviews} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
