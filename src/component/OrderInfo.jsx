// src/component/OrderInfo.jsx
import React from "react";

const OrderInfo = ({ product, quantity }) => {
  const total = product.price * quantity;

  return (
    <div>
      <h2>Order Info</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;
