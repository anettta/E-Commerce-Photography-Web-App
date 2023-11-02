import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Story from "../story/Story.jsx";
import { useGetStoriesQuery } from "../../redux/api/storiesApi";
import Loader from "./Loader.jsx";

const CarouselStories = () => {
  const { data, isLoading } = useGetStoriesQuery();

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
  if (isLoading) return <Loader />;
  return (
    <div>
      <Zoom
        scale={1.4}
        responsive={responsiveSettings}
        pauseOnHover={true}
        arrows={true}
        canSwipe={true}
      >
        <section id="products" className="mt-5">
          <div class="album py-5 ">
            <div class="container">
              <div class="row">
                {data?.stories?.map((story) => (
                  <Story story={story} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Zoom>
    </div>
  );
};

export default CarouselStories;
