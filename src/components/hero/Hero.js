import React from "react";
import heroimage from "../assert/img1.png"; // Ensure the path is correct and the folder name is 'assets' if it's a typo
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src={heroimage} alt="heroimage" />
    </div>
  );
}

export default Hero;
