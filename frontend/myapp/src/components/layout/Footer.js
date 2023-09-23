import React from "react";
import { Link } from "react-router-dom";

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
            <div className="col-lg-4 col-md-6">
              <h4 className="mb-3">Pages</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="text.html">About</Link>
                </li>
                <li>
                  <Link to="text.html">Terms and conditions</Link>
                </li>
                <li>
                  <Link to="faq.html">FAQ</Link>
                </li>
                <li>
                  <Link to="contact.html">Contact us</Link>
                </li>
              </ul>
              <hr />
              <h4 className="mb-3">User section</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/login"
                    data-toggle="modal"
                    data-target="#login-modal"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="mb-3">Top categories</h4>
              <h5>Photography</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="category.html">Contests</Link>
                </li>
                <li>
                  <Link href="category.html">Inspiration</Link>
                </li>
                <li>
                  <Link href="category.html">Techniques</Link>
                </li>
              </ul>
              <h5>String Art</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="category.html">Wall Art</Link>
                </li>
                <li>
                  <Link href="category.html">Greeting Cards</Link>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <h4 className="mb-3">Where to find us</h4>
              <p>
                <strong>Obaju Ltd.</strong>
                <br />
                13/25 New Avenue
                <br />
                New Heaven
                <br />
                45Y 73J
                <br />
                England
                <br />
                <strong>Great Britain</strong>
              </p>
              <a href="contact.html">Go to contact page</a>
              <hr className="d-block d-md-none" />
            </div> */}

            <div className="col-lg-4 col-md-6">
              <h4 className="mb-3">Subscribe</h4>
              <p className="text-muted">
                Get notified when new content is published
              </p>
              <form>
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
              </form>
              <hr />
              <h4 className="mb-3">Stay in touch</h4>
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
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0 ">
              <p className="text-center">
                Anna Gapyuk Creative Studio &copy; {date.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
