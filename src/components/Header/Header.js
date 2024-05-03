import React from "react";
import logo from "../assert/logo.webp";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="h-search">
        <input type="text" placeholder="serch" />
        <i class="bi bi-search"></i>
      </div>
      <div className="h-button">
        <a href="#">Login/Reguister</a>
        <div className="h-imge">
          <i class="bi bi-folder-plus"></i>
          <p>post</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
