import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Product from "./pages/Products";
import SingleProduct from "./pages/SingleProductPage";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import SideCart from "../src/components/SideCart";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      {/* <h1>hello from the tech store </h1> */}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/products" exact component={Product}></Route>
        <Route path="/product/:id" component={SingleProduct}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
