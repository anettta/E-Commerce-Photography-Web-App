import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import "../../App.css";
import { Menu, MenuItem } from "react-foundation";
import Search from "./Search";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";
import { clearCart } from "../../actions/cartActions";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container fluid className="w-100 d-flex justify-content-space-between">
          <Navbar.Brand
            to="/"
            style={{
              color: "#3bb293",
            }}
          >
            <img
              classname="img-fluid"
              style={{ width: "15%", height: "15%" }}
              alt="logo"
              src="/images/logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className=""
            aria-controls="navbarScroll"
            style={{
              backgroundColor: "#3bb293",
            }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Nav.Link
                href="#blog"
                style={{
                  color: "#3bb293",
                }}
              >
                Blog
              </Nav.Link>
              <Nav.Link>
                <Search />
              </Nav.Link>

              <Nav.Link href="/cart">
                <i
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                  style={{
                    color: "#3bb293",
                    fontSize: "22px",
                  }}
                ></i>

                <span
                  className="badge"
                  id="lblCartCount"
                  style={{
                    color: "#f0faf7",
                    paddingBottom: "0 3px",
                  }}
                >
                  {cartItems.length > 0 && cartItems.length}
                </span>
              </Nav.Link>

              {user ? (
                <div className="ml-4 dropdown">
                  <Link
                    to="#!"
                    className="btn dropdown-toggle mr-2"
                    type="button"
                    id="dropDownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ backgroundColor: "#36454f", color: "#3bb293" }}
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={user?.avatar && user?.avatar?.url}
                        alt={user && user?.name}
                        className="rounded-circle"
                      />
                    </figure>
                    <span style={{ color: "#3bb293" }}>
                      {user && user?.name}
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
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <Link className="dropdown-item" to="orders/me">
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
                      Log Out
                    </Link>
                  </div>
                </div>
              ) : (
                !loading && (
                  <Link
                    to="/login"
                    className="btn"
                    id="login_btn"
                    style={{
                      background: "none",
                      border: "1px solid #3bb293",
                      marginRight: "0",
                      float: "right",
                    }}
                  >
                    Log In
                  </Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div>
        <p className="mb-0 w-100 text-center">
          <h6 className="animate-character">
            20% OF ALL SALES GO TO HELP UKRAINE
          </h6>
        </p>
      </div>

      <>
        <style type="text/css">
          {`.customStyle{
        background-color: #3bb293;
      color: #f0faf7;
margin-left:85%;
margin-top:-25%;

  


      }
     
      
      `}
        </style>
      </>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary d-flex justify-content-space-between greenColor"
        >
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{
              backgroundColor: "#3bb293",
            }}
          />

          <Link
            to="/"
            style={{
              color: "#3bb293",
              float: "left",
              textDecoration: "none",
            }}
          >
            {/* <img
            classname="img-fluid"
            style={{ width: "20%", height: "20%" }}
            alt="logo"
            src="/images/logo.png"
          /> */}
            AGCS
          </Link>
          <Navbar.Collapse>
            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
              <form className="d-flex ">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <i
                    className="fa "
                    style={{
                      fontSize: "24px",
                      color: "#3bb293",
                      padding: "7px",
                    }}
                  >
                    Cart &#xf07a;
                  </i>
                  <span className="badge" id="lblCartCount">
                    {cartItems.length}
                  </span>
                </Link>
              </form>
            </div>

            <Search />

            <div className="mr-0">
              {user ? (
                <div className="ml-4 dropdown d-inline ">
                  <Link
                    to="#!"
                    className="btn dropdown-toggle mr-2"
                    type="button"
                    id="dropDownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ backgroundColor: "#36454f", color: "#3bb293" }}
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={user?.avatar && user?.avatar?.url}
                        alt={user && user?.name}
                        className="rounded-circle"
                      />
                    </figure>
                    <span style={{ color: "#3bb293" }}>
                      {user && user?.name}
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
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <Link className="dropdown-item" to="orders/me">
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
                      Log Out
                    </Link>
                  </div>
                </div>
              ) : (
                !loading && (
                  <Link
                    to="/login"
                    className="btn"
                    style={{ float: "left" }}
                    id="login_btn"
                  >
                    Log In
                  </Link>
                )
              )}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  );
};

export default Header;
