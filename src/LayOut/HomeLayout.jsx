import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import AboutUs from "../Components/AboutUs/AboutUs";
import Product from '../Components/Products/Product';
import DiscountOfferSubscription from '../Components/DiscountOfferSubscription/DiscountOfferSubscription';
import Testimonial from '../Components/Testimonial/Testimonial';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <div class="hero_area">
        <NavBar />
        <Hero />
      </div>
      <AboutUs />
      <Product />
      <DiscountOfferSubscription />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
