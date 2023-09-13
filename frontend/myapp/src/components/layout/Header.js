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
  return (
    <Fragment>
      <div className="col-12 col-12 d-flex">
        <div
          className="col-12 col-12 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "900",
            color: "#36454f",

            // backgroundColor: "#A5E1D1",
          }}
        >
          <img
            src="./images/ukraine-flag-icon.png"
            alt="Ukrainian flag"
            width="27px"
            height="20px"
          />
          <p className="text-center m-2 ">
            20% OF ALL SALES GO TO HELP UKRAINE
          </p>
        </div>
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

      <header className="py-5 d-flex">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-black">
            <h1 className="display-4 fw-bolder">
              Shop unique handmade artworks
            </h1>
            <h2 className="masthead-subheading mb-0">
              Handmade greeting cards, fine art prints and string art
            </h2>

            <a className="btn btn-info btn-xl  mt-5" href="#scroll">
              Learn More
            </a>
          </div>
        </div>
      </header>
      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img class="img-fluid " src="/images/greetCard.jpg" alt="..." />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Handmade Ukrainian Greeting Cards</h2>
                <p>
                  Cardstock used to make cards and envelopes are made with 100%
                  cotton. String Art on paper technique. Each card is unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img className="img-fluid " src="/images/5.jpg" alt="..." />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">Black and White Photography</h2>
                <p>
                  Favorite selection of fine art photographs. Prints are signed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid "
                  src="/images/stringArt.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">String Art</h2>
                <p>
                  Cardstock is 100% cotton. Will make a great art addition for
                  your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
