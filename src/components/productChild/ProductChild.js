import React from "react";
import "./pchild.css";
// import img2 from "../assert/img2.webp";
import { Telephone } from "react-bootstrap-icons";
import { Tag } from "react-bootstrap-icons";
function ProductChild({ img, name, id }) {
  return (
    <div className="pchild" key={id}>
      <div className="card">
        <img src={img} alt="img2" />
        <div className="pname">
          <p style={{ color: "black", margin: "5px 0", fontWeight: 600 }}>
            {name.slice(0, 20)}
          </p>
          <div className="call">
            <p>Call For</p>
            <Telephone color="#aaaaaa" />
          </div>
          <div className="price">
            {" "}
            <p>Price</p>
            <Tag color="#aaaaaa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductChild;
