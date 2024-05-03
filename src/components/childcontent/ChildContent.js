import React from "react";
import "./child.css";
function ChildContent({ heder, par1, par2, par3 }) {
  return (
    <div className="child-content">
      <h1>{heder}</h1>

      <p>{par1}</p>
      <p>{par2}</p>
      <p>{par3}</p>
    </div>
  );
}

export default ChildContent;
