import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import "../../App.css";

import Search from "./Search";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";
import { clearCart } from "../../actions/cartActions";
import {
  CButton,
  CCloseButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";

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
  const [visible, setVisible] = useState(false);

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
              <p className="mb-0 text-xs greenColor ml-1">
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
              </p>
              {/* <p className="mb-0 text-xs">Contact me at annagapyuk@gmail.com</p> */}
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-md-end justify-content-between">
                <ul className="list-inline d-block d-md-none mb-0">
                  <li className="list-inline-item">
                    {/* <Link className="text-xs social-link-hover" to="#">
                      <i className="fa fa-envelope"></i>
                    </Link> */}
                    <Link to="/">
                      <img
                        className="img-fluid mb-0"
                        src="/images/logo.png"
                        alt=""
                        width="32"
                        height="34"
                      />
                    </Link>
                  </li>
                </ul>
                <div className="col-4 col-md-6">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Search />
                    </li>
                  </ul>
                </div>
                <ul className="list-inline mb-0 ms-lg-4">
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
                            Logout
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
                          <i class="fas fa-user me-2 "></i>
                          <span class="d-none d-md-inline-block  ">Login</span>
                        </Link>
                      )
                    )}
                  </li>
                  <li className="list-inline-item ">
                    <Link
                      to="/cart"
                      className="social-link-hover text-xs  fw-bold text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fas fa-shopping-cart me-2">
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
    </Fragment>
  );
};

export default Header;
