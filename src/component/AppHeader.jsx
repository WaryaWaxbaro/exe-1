import React from "react";
import "./../Appheader.css";

const AppHeader = ({ image, title }) => {
  return (
    <div className="container">
      <img className="product-header-img" src={image} alt={title} />
      <h1 className="product-header-title">{title}</h1>
    </div>
  );
};

export default AppHeader;
