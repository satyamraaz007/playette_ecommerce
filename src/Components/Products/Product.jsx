// src/pages/Product.jsx
import React from "react";
import ProductCard from "../../Utils/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Men's Shirt",
    price: 75,
    image: "images/p1.png",
    size: "M",
    color: 'Gray',
    addToCart: "Add To Cart",
  },
  {
    id: 2,
    name: "Men's Shirt",
    price: 80,
    image: "images/p2.png",
    size: "L",
    color: 'Black',
    addToCart: "Add To Cart",
  },
  {
    id: 3,
    name: "Women's Dress",
    price: 68,
    image: "images/p3.png",
    size: "S",
    color: 'Purple',
    addToCart: "Add To Cart",
  },
  {
    id: 4,
    name: "Women's Dress",
    price: 70,
    image: "images/p4.png",
    size: "M",
    color: 'Red',
    addToCart: "Add To Cart",
  },
  {
    id: 5,
    name: "Women's Dress",
    price: 75,
    image: "images/p5.png",
    size: "L",
    color: 'Blue',
    addToCart: "Add To Cart",
  },
  {
    id: 6,
    name: "Women's Dress",
    price: 58,
    image: "images/p6.png",
    size: "M",
    color: 'Red',
    addToCart: "Add To Cart",
  },
  {
    id: 7,
    name: "Women's Dress",
    price: 80,
    image: "images/p7.png",
    size: "M",
    color: 'Black',
    addToCart: "Add To Cart",
  },
  {
    id: 8,
    name: "Men's Shirt",
    price: 65,
    image: "images/p8.png",
    size: "M",
    color: 'Blue',
    addToCart: "Add To Cart",
  },
  {
    id: 9,
    name: "Men's Shirt",
    price: 65,
    image: "images/p9.png",
    size: "M",
    color: 'Blue',
    addToCart: "Add To Cart",
  },
];

const Product = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="btn-box">
          <a href="">View All products</a>
        </div>
      </div>
    </section>
  );
};

export default Product;
