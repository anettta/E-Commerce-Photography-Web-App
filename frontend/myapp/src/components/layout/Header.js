import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import "../../App.css";

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
  return (
    <Fragment>
      <div className="">
        <div
          id=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "900",
            color: "#36454f",
            backgroundColor: "#A5E1D1",
          }}
        >
          <img
            src="./images/ukraine-flag-icon.png"
            alt="Ukrainian flag"
            width="27px"
            height="20px"
          />
          <p className="text-center m-2">20% OF ALL SALES GO TO HELP UKRAINE</p>
        </div>
      </div>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand text-lg-left text-center">
            <Link to="/">
              <img
                classname="img-fluid"
                style={{ width: "25%" }}
                alt="logo"
                src="/images/logo.png"
              />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <i
              className="fa"
              style={{
                fontSize: "24px",
                color: "#3bb293",
                padding: "7px",
              }}
            >
              &#xf07a;
            </i>

            <span className="badge" id="lblCartCount">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn  dropdown-toggle mr-4 "
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
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
