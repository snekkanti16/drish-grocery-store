import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Products from "./components/Products";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Features />
      <Products />
      <Categories />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
