import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#000100" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiFoodTruck className="navbar-icon" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  PROFILE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
