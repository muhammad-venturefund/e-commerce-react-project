import React from "react";
import Banner from "../Banner";
import FeatureProducts from "../FeatureProducts";
import Services from "../Services";

const Home = () => {
  const bannerHeading = {
    name:'E-Commerce Store'
  }
  return (
    <div className="home-page">
      <Banner  bannerHeading ={bannerHeading}/>
      <FeatureProducts />
      <Services />
    </div>
  );
};

export default Home;
