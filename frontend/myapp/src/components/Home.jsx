import React, { Fragment, useState, useEffect } from "react";
import MetaData from "./layout/MetaData";

import Product from "./product/Product";
import Loader from "./layout/Loader";

import CustomPagination from "./layout/CustomPagination";
import { useSearchParams } from "react-router-dom";

import "rc-slider/assets/index.css";
import { useGetProductsQuery } from "../redux/api/productsApi";
import CarouselStories from "./layout/CarouselStories";
import toast from "react-hot-toast";
import Filters from "./layout/Filters";

const Home = () => {
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const category = searchParams.get("category");
  const ratings = searchParams.get("ratings");

  const params = { page, keyword };

  min !== null && (params.min = min);
  max !== null && (params.max = max);
  category !== null && (params.category = category);
  ratings !== null && (params.ratings = ratings);

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  const categories = ["Fine Art Photography", "String Art", "Greeting cards"];
  const categoryImages = [
    "https://res.cloudinary.com/ducc0wskb/image/upload/v1697078930/camera_o7hluz.png",
    "https://res.cloudinary.com/ducc0wskb/image/upload/v1697078930/embroidery_flxia0.png",
    "https://res.cloudinary.com/ducc0wskb/image/upload/v1697078930/card_kke1hi.png",
  ];

  useEffect(() => {
    if (isError) {
      toast.error(error.data.errMessage);
    }
  }, [isError]);

  if (isLoading) return <Loader />;

  const columnSize = keyword ? 4 : 3;

  // let count = productsCount;
  // if (keyword) {
  //   count = filteredProductsCount;
  // }

  return (
    <>
      <MetaData title={" Find a piece of art you'll love"} />
      <div className="row">
        <CarouselStories />
        {keyword && (
          <div className="col-12 col-md-3 mt-5">
            <Filters />
          </div>
        )}

        {/* <ul className="d-flex align-items-center justify-content-evenly mt-3 ">
          {categories.map((category, i) => (
            <li
              className="categories"
              style={{
                cursor: "pointer",
                listStyleType: "none",

                backgroundImage: `url(${categoryImages[i]})`,
              }}
              key={category}
              onClick={() => setCategory(category)}
            >
              <span style={{ paddingTop: "160px" }}>{category}</span>
            </li>
          ))}
        </ul> */}

        <div
          className={keyword ? "col-12 col-md-9 mt-5" : "col-12 col-md-12 mt-5"}
        >
          <h1 id="products-heading" className="text-secondary">
            {keyword
              ? `${data?.products?.length} artworks found`
              : "Latest Artworks"}
          </h1>

          <section id="products" className="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <Product
                  key={product._id}
                  product={product}
                  columnSize={columnSize}
                />
              ))}
            </div>
          </section>

          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
