import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header.js";
import React, { useEffect, useState } from "react";
import ProductDetails from "./components/product/ProductDetails";
// import store from "./store";
// import { loadUser } from "./actions/userActions";
// import ProtectedRoute from "./components/route/ProtectedRoute";
// import axios from "axios";
import { Toaster } from "react-hot-toast";

// Stripe Imports
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// Auth or User Imports
import Login from "./components/user/Login.jsx";
import Register from "./components/user/Register.jsx";
// import Profile from "./components/user/Profile";
// import UpdateProfile from "./components/user/UpdateProfile";
// import UpdatePassword from "./components/user/UpdatePassword";
// import ForgotPassword from "./components/user/ForgotPassword";
// import NewPassword from "./components/user/NewPassword";

// Cart Imports
// import Cart from "./components/cart/Cart";
// import Shipping from "./components/cart/Shipping";
// import ConfirmOrder from "./components/cart/ConfirmOrder";
// import Payment from "./components/cart/Payment";
// import OrderSuccess from "./components/cart/OrderSuccess";

// Order Imports
// import ListOrders from "./components/order/ListOrders";
// import OrderDetails from "./components/order/OrderDetails";
// import OrderList from "./components/admin/OrderList";
// import ProcessOrder from "./components/admin/ProcessOrder";
// Admin Imports
// import Dashboard from "./components/admin/Dashboard";
// import ProductsList from "./components/admin/ProductsList";
// import NewProduct from "./components/admin/NewProduct";
// import { useSelector } from "react-redux";
// import UpdateProduct from "./components/admin/UpdateProduct";
// import UsersList from "./components/admin/UsersList";
// import UpdateUser from "./components/admin/UpdateUser";
// import ProductReviews from "./components/admin/ProductReviews";

// import NotFound from "./components/layout/NotFound";
// import Contests from "./components/navbarPages/contests.jsx";
// import Materials from "./components/footerPages/materials.jsx";
import StoryDetails from "./components/story/StoryDetails.jsx";

function App() {
  // const [stripeApiKey, setStripeApiKey] = useState("");
  const [loadLogo, setLoadLogo] = useState(true);

  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoadLogo(false);
    }, 1000);
  }

  // useEffect(() => {
  //   store.dispatch(loadUser());
  //   async function getStripeApiKey() {
  //     const { data } = await axios.get("/api/v1/stripeapi");
  //     setStripeApiKey(data.stripeApiKey);
  //   }
  //   getStripeApiKey();
  // }, []);
  // const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    !loadLogo && (
      <Router>
        <div className="App">
          <Toaster position="top-center" />
          <Header />

          <div className="container container-fluid">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/stories/:id" element={<StoryDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/contests" element={<Contests />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} exact />
              <Route path="/search/:keyword" element={<Home />} />

         
              <Route
                path="/password/forgot"
                element={<ForgotPassword />}
                exact
              /> */}
              {/* {stripeApiKey && (
                <Route
                  path="/payment"
                  element={
                    <Elements stripe={loadStripe(stripeApiKey)}>
                      <Payment />
                    </Elements>
                  }
                />
              )} */}

              {/* <Route
                path="/password/reset/:token"
                element={<NewPassword />}
                exact
              /> */}
              {/* <Route
                path="/me"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/shipping"
                element={
                  <ProtectedRoute>
                    <Shipping />
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route
                path="/order/confirm"
                element={
                  <ProtectedRoute>
                    <ConfirmOrder />
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route
                path="/success"
                element={
                  <ProtectedRoute>
                    <OrderSuccess />
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route
                path="/me/update"
                element={
                  <ProtectedRoute>
                    <UpdateProfile />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/password/update"
                element={
                  <ProtectedRoute>
                    <UpdatePassword />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/orders/me"
                element={
                  <ProtectedRoute>
                    <ListOrders />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderDetails />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/dashboard"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/products"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <ProductsList />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/orders"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <OrderList />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/reviews"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <ProductReviews />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/users"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <UsersList />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/user/:id"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <UpdateUser />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/product/new"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <NewProduct />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/product/:id"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <UpdateProduct />
                  </ProtectedRoute>
                }
                exact
              /> */}
              {/* <Route
                path="/admin/order/:id"
                isAdmin={true}
                element={
                  <ProtectedRoute>
                    <ProcessOrder />
                  </ProtectedRoute>
                }
                exact
              /> */}
            </Routes>
          </div>
          {/* {!loading && (!isAuthenticated || user.role !== "admin") && (
            <Footer />
          )} */}
          <Footer />
        </div>
      </Router>
    )
  );
}

export default App;
