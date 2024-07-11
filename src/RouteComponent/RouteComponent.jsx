// src/components/Route.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from '../LayOut/HomeLayout';
import CartLayOut from '../LayOut/CartLayOut';

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route path="/cart" element={<CartLayOut />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
