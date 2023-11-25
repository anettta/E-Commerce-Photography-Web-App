import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import "../../App.css";

import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";

import { useGetMeQuery } from "../../redux/api/userApi";
import { useLazyLogoutQuery } from "../../redux/api/authApi";

const Header = () => {
  const { isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const cartItems = 0;

  // const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    logout();
    navigate(0);
  };

  return (
    <Fragment>
      {/* <div>
        <p className="mb-0 w-100 text-center">
          <h6 className="alert alert-light mb-0" role="alert">
            20% OF ALL SALES GO TO HELP UKRAINE
          </h6>
        </p>
      </div> */}
      <nav className="navbar  row p-0 ">
        <div
          className="top-bar "
          id="topBar"
          style={{ backgroundColor: "#36454f", fontFamily: "Avenir" }}
        >
          <div className=" text-light m-2">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 d-md-block d-none">
                {/* <p className="mb-0 text-xs greenColor ml-1">
                <Link
                  to="/"
                  style={{
                    fontFamily: "futura",
                    color: "#14927d",
                    textDecoration: "none",
                  }}
                >
                  Anna Gapyuk Creative Studio
                </Link>
              </p> */}
                <p
                  className="mb-0 text-xs"
                  style={{
                    fontFamily: "avenir",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  Contact me at
                  <Link
                    className="text-xs social-link-hover "
                    to="mailto: annagapyuk@gmail.com"
                    style={{
                      textDecoration: "none",
                      marginLeft: "4px",
                      color: "#14927d",
                    }}
                  >
                    annagapyuk@gmail.com
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center align-items-center">
                  <ul className="list-inline d-block d-md-none mb-0">
                    <li className="list-inline-item ">
                      <Link
                        className="  social-link-hover"
                        to="mailto: annagapyuk@gmail.com"
                      >
                        <i className="fa fa-envelope"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="col-6 col-6">
                    <Search />
                  </div>

                  {user ? (
                    <div className=" dropdown ">
                      <Link
                        to="/"
                        className="dropdown-toggle m-2 text-white"
                        type="button"
                        id="dropDownMenuLink"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <figure className="avatar avatar-nav">
                          <img
                            src={user?.avatar?.url}
                            alt={user?.name}
                            className="rounded-circle"
                          />
                        </figure>
                        <span className="d-none d-md-inline-block ">
                          {user?.name}
                        </span>
                      </Link>
                      <ul
                        className="dropdown-menu  "
                        aria-labelledby="dropDownMenuLink"
                      >
                        {user?.role === "admin" && (
                          <Link
                            className="dropdown-item "
                            to="/admin/dashboard"
                            style={{
                              color: "#6cceb4",
                              fontWeight: "700",
                            }}
                          >
                            Dashboard
                          </Link>
                        )}

                        <Link className="dropdown-item " to="/me/orders">
                          <b>Orders</b>
                        </Link>
                        <Link className="dropdown-item" to="/me/profile">
                          <b>Profile</b>
                        </Link>
                        <Link
                          className="dropdown-item text-danger"
                          to="/"
                          onClick={logoutHandler}
                          style={{ fontWeight: "700" }}
                        >
                          Sign out
                        </Link>
                      </ul>
                    </div>
                  ) : (
                    !isLoading && (
                      <Link
                        to="/login"
                        className="btn ms-4 text-light"
                        id="login_btn"
                      >
                        <i className="fa fa-sign-in me-2 "></i>
                        sign in
                      </Link>
                    )
                  )}

                  <Link
                    to="/cart"
                    className="social-link-hover text-xs  fw-bold "
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-shopping-cart ">
                      <span id="cart_count">{cartItems.length}</span>
                    </i>

                    <span className="cart d-none d-md-inline-block">Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#f0faf7" }}
      >
        <div className="container ">
          <Link to="/" className="navbar-brand ">
            <img
              src="https://res.cloudinary.com/ducc0wskb/image/upload/v1695668560/Anna_Gapyuk_1_copy_9_bhk8ly.png"
              width="73px"
              height="auto"
              alt="logo"
              className="d-none d-md-inline-block"
            />
            <img
              src="https://res.cloudinary.com/ducc0wskb/image/upload/v1695668560/Anna_Gapyuk_1_copy_9_bhk8ly.png"
              width="53px"
              height="auto"
              alt="logo"
              className="d-inline-block d-md-none"
            />
          </Link>
          <div className="navbar-buttons">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <i
                className="fa fa-align-justify social-link-hover"
                style={{ color: "#14927d" }}
              ></i>
            </button>
            {/* <button
              type="button"
              data-toggle="collapse"
              data-target="#search"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <span className="sr-only">Toggle search</span>
              <i className="fa fa-search"></i>
            </button> */}
            {/* <a
              href="basket.html"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <i className="fa fa-shopping-cart"></i>
            </a> */}
          </div>

          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto" style={{ fontFamily: "avenir" }}>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Stories
                </Link>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  to="/"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Resources<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <div className="row">
                      {/* <div className="col-md-6 col-lg-3">
                        <h5>Black and White</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Mountains
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Abstract
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Ocean
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/" className="nav-link">
                              Documentary
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                      <div className="col-md-6 col-lg-12">
                        <h5>Photography</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="/contests" className="nav-link">
                              Contests
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="col-md-6 col-lg-6">
                        <h5>String Art On Paper</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              History
                            </Link>
                          </li>
                        
                        </ul>
                      </div> */}
                      {/* <div className="col-md-6 col-lg-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              List of nature places in NY for photography
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              List of contests
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Inspiration board
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/creativeexercises" className="nav-link">
                              Exercise creatively with me
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Shop
                </Link>
              </li>
              {/* <li className="nav-item dropdown menu-large">
                <Link
                  to="/"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  String Art<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <div className="row">
                      <div className="col-md-6 col-md-12">
                        <h5>My works</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Wall Art
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Greeting Cards
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
