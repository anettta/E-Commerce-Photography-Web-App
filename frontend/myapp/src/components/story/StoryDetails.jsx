import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetStoryDetailsQuery } from "../../redux/api/storiesApi";
import MetaData from "../layout/MetaData";
import { Carousel } from "react-bootstrap";
import toast from "react-hot-toast";
import Loader from "../layout/Loader";

const StoryDetails = () => {
  const params = useParams();
  const { data, isLoading, error, isError } = useGetStoryDetailsQuery(
    params?.id
  );

  const story = data?.story;
  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
    }
  }, [isError]);
  if (isLoading) return <Loader />;
  return (
    <>
      <MetaData title={story?.title} />
      <div className="container text-center mt-5">
        <div className="col-12 col-6">
          <h3>{story?.title}</h3>
          <hr />

          <p>{story?.story}</p>

          <div className="row d-flex justify-content-around ">
            <div className="col-12 col-lg-5 mt-5" id="product_image">
              <Carousel pause="hover">
                {story?.images &&
                  story?.images.map((image) => (
                    <Carousel.Item key={image.public_id}>
                      <img
                        className="d-block w-100 img-fluid "
                        src={image.url}
                        alt={story?.title}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>
          </div>
          <hr />
          <p id="product_seller mb-3">
            Author: <strong>{story?.author}</strong>
          </p>
          {/* <p className="badge badge-info">{story?.category}</p> */}
        </div>
        <span id="no_of_reviews">({story?.numOfComments} Comments)</span>
      </div>
    </>
  );
};

export default StoryDetails;
