import React, { useState } from "react";
import "../Stylesheets/NavBar.css";
import Logo from "../assets/Images/Logo.svg";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [flag, setFlag] = useState(false);

  const toggleMenu = () => {
    setFlag(!flag);
  };

  return (
    <React.Fragment>
      <nav>
        <div className="left">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="right">
          <ul>
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div id="responsive">
        <div id="menu">
          <button onClick={toggleMenu}>
            <IoMenu style={{ width: "100%", height: "100%" }} />
          </button>
        </div>
        {flag && (
          <div id="menu-Two">
            <div>
              <ul>
                <li>Crypto Taxes</li>
                <li>Free Tools</li>
                <li>Resource Center</li>
                <li>
                <button><p>Get Started</p></button>
                </li>
              </ul>
              
            </div>
          </div>
        )}
        </div>
        
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
