import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
