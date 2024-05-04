import React from "react";

import { Search } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";
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
        <div className=" ser">
          {" "}
          <Search size={20} />
        </div>
      </div>
      <div className="h-button">
        <a href="#">Login/Reguister</a>
        <div className="h-imge">
          <Icon.FolderPlus size={20} />
          <p>post</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
