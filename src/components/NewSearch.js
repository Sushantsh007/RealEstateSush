import React from "react";
import Header from "./Header";
import Search from "./Search";
// import data from "./Data.j";
import img1 from "../Images/property-1.jpg";
import { FiStar } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import JSONDATA from "./Data.json";

const NewSearch = (props) => {
  const location = useLocation();
  const { pappu } = location.state;

  return (
    <div>
      <Header />
      <Search />
      {JSONDATA.filter((val) => {
        if (pappu == "") {
          return val;
        } else if (val.Address.toLowerCase().includes(pappu.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="filter-list">
          <ul className="property-list">
            <li>
              <div className="property-card">
                <div className="card-banner img-holder">
                  <img
                    src={img1}
                    loading="lazy"
                    alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                    className="img-cover"
                  />
                </div>

                <button
                  className="card-action-btn"
                  aria-label="add to favourite"
                >
                  <div>
                    <MdFavorite />
                  </div>
                </button>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      10765 Hillshire Ave, Baton Rouge, LA 70810,{val.Address};
                    </a>
                  </h3>

                  <ul className="card-list">
                    <li className="card-item">
                      <div className="item-icon">
                        <BiCube />
                      </div>

                      <span className="item-text">8000sqf</span>
                    </li>

                    <li className="card-item">
                      <div className="item-icon">
                        <BiBed />
                      </div>

                      <span className="item-text">4 Beds</span>
                    </li>

                    <li className="card-item">
                      <div className="item-icon">{/* <IoManSharp /> */}</div>

                      <span className="item-text">4 Baths</span>
                    </li>
                  </ul>

                  <div className="card-meta">
                    <div>
                      <span className="meta-title">Price</span>

                      <span className="meta-text">$5000</span>
                    </div>

                    <div>
                      <span className="meta-title">Rating</span>

                      <span className="meta-text">
                        <div class="rating-wrapper">
                          <FiStar />
                          <FiStar />
                          <FiStar />
                          <FiStar />
                          <FiStar />
                        </div>

                        <span>5.0(30)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </div>
        );
      })}
    </div>
  );
};

export default NewSearch;
