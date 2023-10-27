import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <div
        id="footer"
        style={{
          fontFamily: "avenir",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">About</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/materials">Sustainable practice</Link>
                </li>

                <li>
                  <Link to="/">Stories</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              {/* <h4 className="mb-3">Top categories</h4> */}
              <h4>Resources</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contests">Contests</Link>
                </li>
                {/* <li>
                  <Link href="category.html">Inspiration Board</Link>
                </li>
                <li>
                  <Link href="category.html">Exercise creatively with me</Link>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Search</h4>
              <p className="text-muted">
                Find unique artworks that you will love
              </p>
              <ul className="list-unstyled">
                <li className="justify-content-center justify-content-center">
                  <Search />
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              {/* <h4 className="mb-3">Subscribe</h4>
              <p className="text-muted">
                Get notified when new content is published
              </p> */}
              {/* <form>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-append">
                    <button
                      type="button"
                      className="btn "
                      style={{
                        backgroundColor: "#3bb293",
                        color: "#f0faf7",
                        fontFamily: "avenir",
                        fontWeight: "700",
                      }}
                    >
                      Subscribe!
                    </button>
                  </span>
                </div>
              </form> */}
              {/* <hr /> */}

              <h4 className="mb-3">Contact</h4>
              <p className="text-muted">
                Questions or feedback? <br /> I'd love to hear from you <br />
                <Link
                  to="mailto: annagapyuk@gmail.com"
                  className="email external"
                  style={{
                    textDecoration: "none",
                    marginLeft: "4px",
                    color: "#14927d",
                  }}
                >
                  annagapyuk@gmail.com
                </Link>
              </p>
              <p className="social">
                <Link
                  to="https://github.com/anettta"
                  className="github external"
                >
                  <i className="fa fa-github"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/annagapyuk/"
                  className="linkedin external"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>

                {/* <a href="#" className="instagram external">
                  <i className="fa fa-instagram"></i>
                </a> */}

                <Link
                  to="mailto: annagapyuk@gmail.com"
                  className="email external"
                >
                  <i className="fa fa-envelope"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="copyright">
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-12 ">
              <Link to="/" className="navbar-brand home mb-2">
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
              <p
                className="text-center"
                style={{ fontSize: "12px", color: "#f0faf7" }}
              >
                &copy; {date.getFullYear()}
                <Link
                  to="https://github.com/anettta"
                  style={{
                    textDecoration: "none",
                    marginLeft: "4px",
                    color: "#f0faf7",
                  }}
                >
                  by Anna Gapyuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
