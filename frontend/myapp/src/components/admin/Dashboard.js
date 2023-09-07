import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import Loader from "../layout/Loader";
import { getAdminProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../actions/orderActions";
import { allUsers } from "../../actions/userActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { orders, totalAmount, loading } = useSelector(
    (state) => state.allOrders
  );
  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products.forEach((product) => {
    if (product.stock === 0) {
      outOfStock++;
    }
  });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(allOrders);
    dispatch(allUsers);
  }, [dispatch]);
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <h1 className="my-4">Dashboard</h1>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <MetaData title={"Admin Dashboard"} />
              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div
                    className="card o-hidden h-100"
                    style={{ backgroundColor: "#36454f", color: "#3bb293" }}
                  >
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Total Amount
                        <br /> <b>${totalAmount && totalAmount.toFixed(2)}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pr-4">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card  o-hidden h-100"
                    style={{ backgroundColor: "#59c8aa", color: "#f0faf7" }}
                  >
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Products
                        <br /> <b>{products && products.length}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/admin/products"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card  o-hidden h-100"
                    style={{ backgroundColor: "#6cceb4", color: "#f0faf7" }}
                  >
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Orders
                        <br /> <b>{orders && orders.length}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/admin/orders"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card  o-hidden h-100"
                    style={{ backgroundColor: "#7fd4be", color: "#f0faf7" }}
                  >
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Users
                        <br /> <b>{users && users.length}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/admin/users"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card  o-hidden h-100"
                    style={{ backgroundColor: "#ce6c86", color: "#f0faf7" }}
                  >
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Out of Stock
                        <br /> <b>{outOfStock}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
