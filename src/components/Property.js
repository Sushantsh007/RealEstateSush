import "./Property.css";
import React from "react";
import img1 from "../Images/property-1.jpg";
import img2 from "../Images/property-2.jpg";
import img3 from "../Images/property-3.jpg";
import img4 from "../Images/property-4.jpg";
import img5 from "../Images/property-5.jpg";
import img6 from "../Images/property-6.jpg";
import { MdFavorite } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
// import { IoManSharp} from "react-icons/io";
import { FiStar } from "react-icons/fi";
// import "./Global.css";

const Property = () => {
  return (
    <div className="property">
      <div className="container">
        <h2 className="h2 section-title">Featured Properties</h2>
        <p className="section-text">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>

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

              <button className="card-action-btn" aria-label="add to favourite">
                <div>
                  <MdFavorite />
                </div>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                  10765 Road 3,Block A Sector-10,GURGAON
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
          
          <li>
            <div className="property-card">
              <div className="card-banner img-holder">
                <img
                  src={img2}
                  loading="lazy"
                  alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                  className="img-cover"
                />
              </div>

              <button className="card-action-btn" aria-label="add to favourite">
                <div>
                  <MdFavorite />
                </div>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    10765 Road 3,Block A Sector-10,NOIDA
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
          <li>
            <div className="property-card">
              <div
                className="card-banner img-holder"
                // style={{ width: 800, height: 533 }}
              >
                <img
                  src={img3}
                  // width="800"
                  // height="533"
                  loading="lazy"
                  alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                  className="img-cover"
                />
              </div>

              <button className="card-action-btn" aria-label="add to favourite">
                <div>
                  <MdFavorite />
                </div>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                  10765 Road 3,Block A Sector-10,DELHI
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
          <li>
            <div className="property-card">
              <div
                className="card-banner img-holder"
                // style={{ width: 800, height: 533 }}
              >
                <img
                  src={img4}
                  width="800px"
                  height="533px"
                  loading="lazy"
                  alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                  className="img-cover"
                />
              </div>

              <button className="card-action-btn" aria-label="add to favourite">
                <div>
                  <MdFavorite />
                </div>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                  10765 Road 3,Block A Sector-10,INDORE
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
          <li>
            <div className="property-card">
              <div
                className="card-banner img-holder"
                // style={{ width: 800, height: 533 }}
              >
                <img
                  src={img5}
                  // width="800"
                  // height="533"
                  loading="lazy"
                  alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                  className="img-cover"
                />
              </div>

              <button className="card-action-btn" aria-label="add to favourite">
                <div>
                  <MdFavorite />
                </div>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                  10765 Road 3,Block A Sector-10,CHENNAI
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
          <li>
            <div className="property-card">
              <div
                className="card-banner img-holder"
                // style={{ width: 800, height: 533 }}
              >
                <img
                  src={img6}
                  // width="800"
                  // height="533"
                  loading="lazy"
                  alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                  className="img-cover"
                />
              </div>

              <button className="card-action-btn" aria-label="add to favourite">
                <div>
                  <MdFavorite />
                </div>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                  10765 Road 3,Block A Sector-10,KOLKATA
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
    </div>
  );
};

export default Property;
