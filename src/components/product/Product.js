import React from "react";
import "./product.css";
import data from "../data.js";

// import img7 from "../assert/img7.webp";
import ProductChild from "../productChild/ProductChild";

function Product() {
  return (
    <div className="product">
      {data.map((data) => {
        return (
          <ProductChild
            img={data.img}
            name={data.name}
            id={data.id}
            key={data.id}
          />
        );
      })}
    </div>
  );
}

export default Product;
