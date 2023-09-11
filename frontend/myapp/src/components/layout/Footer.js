// import React, { Fragment } from "react";

// const Footer = () => {
//   const date = new Date();

//   return (
//     <Fragment>
//       <footer className="py-1">
//         <p className="text-center mt-1" style={{ color: "#36454f" }}>
//           Anna Gapyuk Creative Studio &copy; {date.getFullYear()}
//         </p>
//       </footer>
//     </Fragment>
//   );
// };

// export default Footer;

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const date = new Date();
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            String Art | Black and White Photography | Handmade Greeting Cards |
            Wall Art
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">About</h5>

              <ul className="list-unstyled mb-2">
                <li>
                  <a href="#!" className="text-white">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Portfolio
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">String Art</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Greeting Cards
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Wall Art
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Photography</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    B&W
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Color
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Fine Art signed prints
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Stories</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Culebra, PR
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    New York, NY
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ukraine
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Colorado
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Anna Gapyuk Creative Studio &copy; {date.getFullYear()}
      </div>
    </MDBFooter>
  );
}
