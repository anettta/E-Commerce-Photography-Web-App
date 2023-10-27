import React from "react";

const Materials = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1
            className="p-5 d-flex justify-content-center border-bottom"
            style={{ color: "#14927d" }}
          >
            In the production of cards, we use sustainable materials
          </h1>

          <div className="col-12 col-12 mt-5 text-center mb-5">
            <div className="d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1519356162333-4d49ceade668?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cotton"
                width={"1000px"}
              />

              <h2 className="centered">
                CARDSTOCK AND ENVELOPES AT 100% COTTON
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materials;
