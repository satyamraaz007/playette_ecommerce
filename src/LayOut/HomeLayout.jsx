import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import AboutUs from "../Components/AboutUs/AboutUs";
import Product from '../Components/Products/Product';

const Home = () => {
  return (
    <div>
      <div class="hero_area">
        <NavBar />
        <Hero />
      </div>
      <AboutUs />
      <Product />
    </div>
  )
}

export default Home
