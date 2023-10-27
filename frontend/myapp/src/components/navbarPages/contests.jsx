import React from "react";

const Contests = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1
            className="p-5 d-flex justify-content-center border-bottom"
            style={{ color: "#14927d" }}
          >
            Contests
          </h1>

          <div className="col-12 col-md-4 mt-5 mb-5">
            <div className="contest">
              <a href="https://www.visapourlimage.com/en/festival/awards-and-grants/bourse-canon-de-la-femme-photojournaliste">
                <img
                  src="https://www.visapourlimage.com/assets/f1600x890-s5-q70-p1/7fec7f8b/drone2017_1.jpg.webp"
                  alt="contest"
                />
                <div className="top-left badge badge-info ">
                  Opening date for submissions: January 4, 2024.
                </div>
                <div className="top-right badge badge-danger ">
                  Deadline for the 2024: April 4, 2024
                </div>
                <h2 className="centered">Canon Female Photojournalist Grant</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contests;
