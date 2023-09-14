import React, { Fragment } from "react";

const Content = () => {
  return (
    <Fragment>
      <header className="py-5 d-flex ">
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

export default Content;
