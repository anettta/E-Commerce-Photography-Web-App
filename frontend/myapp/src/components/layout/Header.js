import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import "../../App.css";

import Search from "./Search";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";
import { clearCart } from "../../actions/cartActions";
import { CDropdownDivider } from "@coreui/react";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(clearCart(cartItems));
    alert.success("Logged out successfully");
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

      <div
        className="top-bar py-2"
        id="topBar"
        style={{ backgroundColor: "#36454f", fontFamily: "avenir" }}
      >
        <div className="container px-lg-0 text-light py-1">
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
              <div className="d-flex justify-content-center justify-content-center align-items-center">
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
                  <ul className="list-inline mb-0">
                    <li className="justify-content-center justify-content-center">
                      <Search />
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center">
                  <ul className="list-inline mb-0 ">
                    <li className="list-inline-item ">
                      {user ? (
                        <div className="ml-4 dropdown d-inline ">
                          <Link
                            to="#!"
                            className=" dropdown-toggle  text-xs fw-bold text-reset"
                            type="button"
                            id="dropDownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <figure className="avatar avatar-nav">
                              <img
                                src={user.avatar && user.avatar.url}
                                alt={user && user.name}
                                className="rounded-circle"
                              />
                            </figure>
                            <span className="d-none d-md-inline-block ">
                              {user && user.name}
                            </span>
                          </Link>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropDownMenuButton"
                          >
                            {user && user.role === "admin" && (
                              <Link className="dropdown-item" to="/dashboard">
                                Dashboard
                              </Link>
                            )}
                            <CDropdownDivider />
                            <Link className="dropdown-item" to="/orders/me">
                              Orders
                            </Link>
                            <Link className="dropdown-item" to="/me">
                              Profile
                            </Link>
                            <Link
                              className="dropdown-item text-danger"
                              to="/"
                              onClick={logoutHandler}
                            >
                              sign out
                            </Link>
                          </div>
                        </div>
                      ) : (
                        !loading && (
                          <Link
                            to="/login"
                            className="text-xs fw-bold text-reset "
                            id="login_btn"
                          >
                            <i class="fa fa-sign-in me-2 "></i>
                            <span class="d-none d-md-inline-block  ">
                              sign in
                            </span>
                          </Link>
                        )
                      )}
                    </li>
                    <li className="list-inline-item ">
                      <Link
                        to="/cart"
                        className="social-link-hover text-xs  fw-bold "
                        style={{ textDecoration: "none" }}
                      >
                        <i className="fas fa-shopping-cart ">
                          <span id="cart_count">{cartItems.length}</span>
                        </i>

                        {/* <span className="cart d-none d-md-inline-block">
                        Cart
                      </span> */}
                      </Link>
                    </li>
                    {/* <li className="list-inline-item  m-1">
                    <Link
                      className="text-xs social-link-hover"
                      to="https://github.com/anettta"
                      title="Github"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                  </li> */}
                    {/* <li class="list-inline-item text-gray-600 m-1">
                    <Link
                      class="text-xs social-link-hover"
                      to="#"
                      title="Instagram"
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li> */}
                    {/* <li className="list-inline-item text-gray-600 m-1">
                    <Link
                      className="text-xs social-link-hover"
                      to="https://www.linkedin.com/in/annagapyuk/"
                      title="Linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#f0faf7" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand home">
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  href="/"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Photography<b className="caret"></b>
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
                      <div className="col-md-6 col-lg-4">
                        <h5>Stories</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              New Palz, NY
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Walk along Tamarindo Beach
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              NYBG in four seasons
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <h5>Services</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Portrait session
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Product photography
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="category.html" className="nav-link">
                              Your request
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-4">
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
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  href="/"
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
