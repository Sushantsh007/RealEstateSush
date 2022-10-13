import React from "react";
import "./Header.css";

import { IoBusiness } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {
  return (
    <div className="p">
        <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <IoBusiness/> Estatery
          </a>

          <div className="navbar container" data-navbar>
            <ul className="navbar-list">
              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  Buy
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  Sell
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  Listing
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <a href="#" className="btn btn-secondary">
            Signup
          </a>

          <button
            className="nav-toggle-btn"
            aria-label="Toggle menu"
            data-nav-toggler
          >
            <IoMenu />
            <IoCloseSharp />
          </button>
        </div>
      </header>

      
    </div>
  );
};

export default Header;
