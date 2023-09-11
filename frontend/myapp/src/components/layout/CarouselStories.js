import React, { Fragment } from "react";

import "react-slideshow-image/dist/styles.css";
import { Slide, Zoom } from "react-slideshow-image";

const CarouselStories = () => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  return (
    <div>
      <Zoom
        scale={1.4}
        responsive={responsiveSettings}
        pauseOnHover={true}
        arrows={false}
        canSwipe={true}
      >
        <div className="col-xl-12 col-sm-12 mb-3">
          <div className="each-slide-effect">
            <div
              className="img-fluid"
              style={{ backgroundImage: `url(${images[3]})` }}
            >
              <div className="text-center">
                <h1 className="title">Culebra</h1>
                <button className="btn btn-dark ">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-sm-12 mb-3">
          <div className="each-slide-effect">
            <div
              className="img-fluid"
              style={{ backgroundImage: `url(${images[4]})` }}
            >
              <div className="text-center">
                <h1 className="title">Central Park</h1>
                <button className="btn btn-dark ">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-sm-12 mb-3">
          <div className="each-slide-effect">
            <div
              className="img-fluid"
              style={{ backgroundImage: `url(${images[5]})` }}
            >
              <div className="text-center">
                <h1 className="title">Aspen</h1>
                <button className="btn btn-dark ">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <div>
        {/* <Fragment>
          <div className="">
            <h1 className="my-4">Stories</h1>

            <Slide
              responsive={responsiveSettings}
              indicators={true}
              pauseOnHover={true}
              arrows={false}
              canSwipe={true}
              slidesToShows={3}
            >
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="each-slide-effect">
                  <div
                    className="img-fluid"
                    style={{ backgroundImage: `url(${images[0]})` }}
                  >
                    <div className="text-center">
                      <h1 className="title">Culebra</h1>
                      <button className="btn btn-info">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="each-slide-effect">
                  <div
                    className="img-fluid"
                    style={{ backgroundImage: `url(${images[1]})` }}
                  >
                    <div className="text-center">
                      <h1 className="title">Central Park</h1>
                      <button className="btn btn-info ">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="each-slide-effect">
                  <div
                    className="img-fluid"
                    style={{ backgroundImage: `url(${images[2]})` }}
                  >
                    <div className="text-center">
                      <h1 className="title">Aspen</h1>
                      <button className="btn btn-info ">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </Fragment> */}
      </div>
    </div>
  );
};

export default CarouselStories;
