import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"My Profile"} />
          <h2 className="mt-5 ml-5">My Profile</h2>
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3 text-center">
              <img
                className="img-fluid  avatar-profile"
                src={user?.avatar?.url}
                alt={user?.name}
              />

              <Link
                to="/me/update"
                id="edit_profile"
                className="btn btn-primary btn-block my-5"
              >
                Edit Profile
              </Link>
            </div>

            <div className="col-12 col-md-5 text-center">
              <h4>Full Name</h4>
              <p>{user?.name}</p>

              <h4>Email Address</h4>
              <p>{user?.email}</p>

              <h4>Joined On</h4>
              <p>{String(user?.createdAt).substring(0, 10)}</p>

              {user.role !== "admin" && (
                <Link to="/orders/me" className="btn myorders btn-block mt-5">
                  My Orders
                </Link>
              )}

              <Link
                to="/password/update"
                id="edit_profile"
                className="btn btn-primary btn-block my-5"
              >
                Change Password
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
