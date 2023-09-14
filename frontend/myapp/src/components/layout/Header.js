import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import "../../App.css";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";
import { clearCart } from "../../actions/cartActions";

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
  // const params = useParams();
  // const keyword = params.keyword;

  return (
    <Fragment>
      {/* <div className="col-12 col-12 ">
        <p className=" alert alert-info m-0 p-0 w-100 text-center">
          <em>20% OF ALL SALES GO TO HELP UKRAINE</em>
        </p>
      </div> */}
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

      <Navbar expand="lg" variant="light">
        <Navbar.Brand>
          <Link to="/">
            <img
              classname="img-fluid"
              style={{ width: "25%" }}
              alt="logo"
              src="/images/logo.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="customStyle"
        />
        <Navbar.Collapse>
          <div className="col-12 col-md-6 ">
            <Search />
          </div>
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
                <span style={{ color: "#3bb293" }}>{user && user?.name}</span>
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
              <Link to="/login" className="btn ml-4" id="login_btn">
                Log In
              </Link>
            )
          )}
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
