import React, { Fragment, useState, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { Link, useParams } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import Content from "./layout/Content";
// import CarouselStories from "./layout/CarouselStories";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  // const [seller, setSeller] = useState("");

  const categories = ["Fine Art Photography", "String Art", "Greeting cards"];
  const categoryImages = [
    "https://res.cloudinary.com/ducc0wskb/image/upload/v1697078930/camera_o7hluz.png",
    "https://res.cloudinary.com/ducc0wskb/image/upload/v1697078930/embroidery_flxia0.png",
    "https://res.cloudinary.com/ducc0wskb/image/upload/v1697078930/card_kke1hi.png",
  ];

  // const sellers = ["Amazon", "AG"];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const params = useParams();

  const keyword = params.keyword;

  useEffect(() => {
    if (error) {
      alert.success("success");
      return alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNum(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="container ">
          <MetaData title={"Anna Gapyuk Creative Studio"} />

          {/* {!loading &&
            !keyword &&
            (!isAuthenticated || user.role !== "admin") && <Content />} */}

          <section id="products" className="container ">
            {/* <div className="row"> */}
            {count > 0 ? (
              <Fragment>
                {/* <Range
                        marks={{ 1: `$1`, 1000: `$1000` }}
                        min={1}
                        max={1000}
                        defaultValue={[1, 1000]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      /> */}

                {/* <hr className="my-5" /> */}
                <div className="row ">
                  <div className="col-12 col-12 ">
                    {/* <h4 className="mb-3">Categories</h4> */}

                    <ul className="d-flex align-items-center justify-content-evenly mt-3 ">
                      {categories.map((category, i) => (
                        <li
                          className="categories"
                          style={{
                            cursor: "pointer",
                            listStyleType: "none",
                            backgroundImage: `url(${categoryImages[i]})`,
                          }}
                          key={category}
                          onClick={() => setCategory(category)}
                        >
                          <span style={{ paddingTop: "160px" }}>
                            {category}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* <h3 id="products_heading" className="text-center ">
                  {keyword && count > 0 ? (
                    <p style={{ color: "#36454f" }}>artworks</p>
                  ) : (
                    <p style={{ color: "#ce6c86" }}>no artworks found</p>
                  )}
                </h3> */}

                {/* <hr className="my-3" /> */}
                {/* <div className="mt-5">
                        <h4 className="mb-3">Ratings</h4>
                        <ul className="pl-0">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={star}
                              onClick={() => setRating(star)}
                            >
                              <div className="rating-outer">
                                <div
                                  className="rating-inner"
                                  style={{
                                    width: `${star * 20}%`,
                                  }}
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div> */}

                {/* <hr className="my-3" />
                      <div className="mt-5">
                        <h4 className="mb-3">Sellers</h4>
                        <ul className="pl-0">
                          {sellers.map((seller) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={seller}
                              onClick={() => setSeller(seller)}
                            >
                              {seller}
                            </li>
                          ))}
                        </ul>
                      </div> */}
                <div>
                  {products?.map((product) => (
                    <Product key={product._id} product={product} col={3} />
                  ))}
                </div>
              </Fragment>
            ) : (
              <h4 id="products_heading" className="text-center ">
                <p style={{ color: "#ce6c86" }}>no artworks found</p>
              </h4>
            )}
            {/* ) : (
                products?.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))
              )} */}
            {/* </div> */}
          </section>

          {resPerPage <= count && (
            <div className="pagination justify-content-center">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNum}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Home;
