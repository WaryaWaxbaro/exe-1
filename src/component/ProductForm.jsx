// src/component/ProductForm.jsx
import React, { useState } from "react";
import OrderInfo from "./OrderInfo";

const products = [
  { name: "AMD Ryzen 5 3600", price: 245 },
  { name: "Intel Core i7-10700K", price: 320 },
  // ... add more products as needed
];

const ProductForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(0, prev + delta));
  };

  return (
    <div>
      <h2>Select product</h2>
      <div>
        <label>Product:</label>
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(e.target.value)}
        >
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Quantity:</label>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      {/* Render OrderInfo component */}
      <OrderInfo product={products[selectedIndex]} quantity={quantity} />
    </div>
  );
};

export default ProductForm;
