import React from "react";
import "./cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    console.log(product);
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;

    console.log(total);
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summery</h2>
      <p>
        Selected item : <strong>{cart.length}</strong>{" "}
      </p>
      <p>
        Total Price : <strong>{total}</strong>$
      </p>
      <p>
        Total Shipping Charge : <strong>{totalShipping}</strong>$
      </p>
      <p>
        Tax : <strong> {tax}</strong>$
      </p>
      <h2>
        Grand Total : <strong>{grandTotal}</strong>${" "}
      </h2>
    </div>
  );
};

export default Cart;
