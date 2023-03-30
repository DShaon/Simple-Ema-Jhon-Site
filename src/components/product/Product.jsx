import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const handleAddToCart = props.handleAddToCart;
  const { img, name, price, seller, ratings, id } = props.product;
  // console.log(props);
  return (
    <div className="product">
      <img src={img} alt="" />
      <h4 className="name">{name}</h4>
      <h5 className="price">Price : {price}</h5>
      <p>Manufacturer : {seller}</p>
      <p>Rating : {ratings} Star</p>
      <div className="Cart-btn">
        <button onClick={() => handleAddToCart(props.product)}>
          Add to Cart   <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
