// import "./App.css";
// import { useEffect, useState } from "react";
// // import Header from "./Componet/Layout/Header/Header.js";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";

// import { useSelector } from "react-redux";

// import axios from "axios";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


// import Header from "./Componet/Layout/Header/Header.js";
// import Footer from "./Componet/Layout/Footer/Footer.js";
// import Home from "./Componet/Home/Home.js";
// import ProductDetails from "./Componet/Product/ProductDetails.js";
// import Products from "./Componet/Product/Product.js";
// import Search from "./Componet/Product/Search.js";
// import LoginSignUp from "./Componet/User/LoginSignUp.js";
// import Profile from "./Componet/User/Profile.js";
// import ProtectedRoute from "./Componet/Route/ProductRoute.js";
// import UpdateProfile from "./Componet/User/UpdatProfile.js";
// import UpdatePassword from "./Componet/User/UpdatePassword.js";
// import ForgotPassword from "./Componet/User/ForgotPassword.js";
// import ResetPassword from "./Componet/User/ResetPassword.js";
// import Cart from "./Componet/Cart/Cart.js";
// import Shipping from "./Componet/Cart/Shipping.js";
// import ConfirmOrder from "./Componet/Cart/ConfirmOrde.js";
// import Payment from "./Componet/Cart/Payment.js";
// import OrderSuccess from "./Componet/Cart/OrderSuccess.js";
// import MyOrders from "./Componet/Orde/MyOrders.js";
// import OrderDetails from "./Componet/Orde/OrderDetails.js";
// import Dashboard from "./Componet/Admin/Dashbord.js";
// import ProductList from "./Componet/Admin/ProductList.js";
// import NewProduct from "./Componet/Admin/NewProduct.js";
// import UpdateProduct from "./Componet/Admin/UpdteProduct.js";
// import OrderList from "./Componet/Admin/OrdeList.js";
// import ProcessOrder from "./Componet/Admin/ProcessOrdes.js";
// import UsersList from "./Componet/Admin/UserList.js";
// import UpdateUser from "./Componet/Admin/UpdateUser.js";
// import ProductReviews from "./Componet/Admin/ProductReviews.js";
// import Contact from "./Componet/Layout/Contact/Contact.js";
// import About from "./Componet/Layout/About/About.js";
// import NotFound from "./Componet/Layout/NotFound/NoteFound.js";
// import store from "./store.js";
// import { loadUser } from "./Action/UserAction.js";
// import UserOptions from "./Componet/Layout/Header/UserOpction.js";


// function App() {
//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   const [stripeApiKey, setStripeApiKey] = useState("");

//   async function getStripeApiKey() {
//     const { data } = await axios.get("/api/v1/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
//   }

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });

//     store.dispatch(loadUser());

//     getStripeApiKey();
//   }, []);

//   window.addEventListener("contextmenu", (e) => e.preventDefault());

//   return (
//     <Router>
//       <Header />

//       {isAuthenticated && <UserOptions user={user} />}

//       {stripeApiKey && (
//         <Elements stripe={loadStripe(stripeApiKey)}>
//           <ProtectedRoute exact path="/process/payment" component={Payment} />
//         </Elements>
//       )}

//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/product/:id" component={ProductDetails} />
//         <Route exact path="/products" component={Products} />
//         <Route path="/products/:keyword" component={Products} />

//         <Route exact path="/search" component={Search} />

//         <Route exact path="/contact" component={Contact} />

//         <Route exact path="/about" component={About} />

//         <ProtectedRoute exact path="/account" component={Profile} />

//         <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

//         <ProtectedRoute
//           exact
//           path="/password/update"
//           component={UpdatePassword}
//         />

//         <Route exact path="/password/forgot" component={ForgotPassword} />

//         <Route exact path="/password/reset/:token" component={ResetPassword} />

//         <Route exact path="/login" component={LoginSignUp} />

//         <Route exact path="/cart" component={Cart} />

//         <ProtectedRoute exact path="/shipping" component={Shipping} />

//         <ProtectedRoute exact path="/success" component={OrderSuccess} />

//         <ProtectedRoute exact path="/orders" component={MyOrders} />

//         <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

//         <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

//         <ProtectedRoute
//           isAdmin={true}
//           exact
//           path="/admin/dashboard"
//           component={Dashboard}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductList}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/orders"
//           isAdmin={true}
//           component={OrderList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/order/:id"
//           isAdmin={true}
//           component={ProcessOrder}
//         />
//         <ProtectedRoute
//           exact
//           path="/admin/users"
//           isAdmin={true}
//           component={UsersList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/user/:id"
//           isAdmin={true}
//           component={UpdateUser}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/reviews"
//           isAdmin={true}
//           component={ProductReviews}
//         />

//         <Route
//           component={
//             window.location.pathname === "/process/payment" ? null : NotFound
//           }
//         />
//       </Switch>

//       <Footer />
//     </Router>
//   );
// }

// export default App;import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./Componet/Layout/Header/Header.js";
import Footer from "./Componet/Layout/Footer/Footer.js";
import Home from "./Componet/Home/Home.js";
import ProductDetails from "./Componet/Product/ProductDetails.js";
import Products from "./Componet/Product/Product.js";
import Search from "./Componet/Product/Search.js";
import LoginSignUp from "./Componet/User/LoginSignUp.js";
import Profile from "./Componet/User/Profile.js";
import ProtectedRoute from "./Componet/Route/ProductRoute.js";
import UpdateProfile from "./Componet/User/UpdatProfile.js";
import UpdatePassword from "./Componet/User/UpdatePassword.js";
import ForgotPassword from "./Componet/User/ForgotPassword.js";
import ResetPassword from "./Componet/User/ResetPassword.js";
import Cart from "./Componet/Cart/Cart.js";
import Shipping from "./Componet/Cart/Shipping.js";
import ConfirmOrder from "./Componet/Cart/ConfirmOrde.js";
import Payment from "./Componet/Cart/Payment.js";
import OrderSuccess from "./Componet/Cart/OrderSuccess.js";
import MyOrders from "./Componet/Orde/MyOrders.js";
import OrderDetails from "./Componet/Orde/OrderDetails.js";
import Dashboard from "./Componet/Admin/Dashbord.js";
import ProductList from "./Componet/Admin/ProductList.js";
import NewProduct from "./Componet/Admin/NewProduct.js";
import UpdateProduct from "./Componet/Admin/UpdteProduct.js";
import OrderList from "./Componet/Admin/OrdeList.js";
import ProcessOrder from "./Componet/Admin/ProcessOrdes.js";
import UsersList from "./Componet/Admin/UserList.js";
import UpdateUser from "./Componet/Admin/UpdateUser.js";
import ProductReviews from "./Componet/Admin/ProductReviews.js";
import Contact from "./Componet/Layout/Contact/Contact.js";
import About from "./Componet/Layout/About/About.js";
import NotFound from "./Componet/Layout/NotFound/NoteFound.js";
import store from "./store.js";
import { loadUser } from "./Action/UserAction.js";
import UserOptions from "./Componet/Layout/Header/UserOpction.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/success" component={OrderSuccess} />
        <ProtectedRoute exact path="/orders" component={MyOrders} />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute exact path="/admin/products" isAdmin={true} component={ProductList} />
        <ProtectedRoute exact path="/admin/product" isAdmin={true} component={NewProduct} />
        <ProtectedRoute exact path="/admin/product/:id" isAdmin={true} component={UpdateProduct} />
        <ProtectedRoute exact path="/admin/orders" isAdmin={true} component={OrderList} />
        <ProtectedRoute exact path="/admin/order/:id" isAdmin={true} component={ProcessOrder} />
        <ProtectedRoute exact path="/admin/users" isAdmin={true} component={UsersList} />
        <ProtectedRoute exact path="/admin/user/:id" isAdmin={true} component={UpdateUser} />
        <ProtectedRoute exact path="/admin/reviews" isAdmin={true} component={ProductReviews} />
        <Route component={window.location.pathname === "/process/payment" ? null : NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
