import React from "react";
import "./product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  console.log();
  return (
    <div className="product">
      <img src={img} alt="" />
      <h4 className="name">{name}</h4>
      <h5 className="price">Price : {price}</h5>
      <p>Manufacturer : {seller}</p>
      <p>Rating : {ratings} Star</p>
      <div className="Cart-btn">
        <button>Add to Cart </button>
      </div>
    </div>
  );
};

export default Product;
