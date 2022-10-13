import "./Search.css";
// import "./Global.css";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import NewSearch from "./NewSearch";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");


  const changeHandler=(event)=>{
    setSearchText(event.target.value);

  }

  

  return (
    <div className="article">
      <div className="section hero">
        <div className="container">
          <div className="hero-bg">
            <div className="hero-content">
              <h1 className="h1 hero-title">
                We will help you find your{" "}
                <span className="span">Wonderful</span> home
              </h1>
              <p className="hero-text">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
            </div>
          </div>
          <div className="hero-form-wrapper">
            <div className="form-tab">
              <button className="tab-btn active" data-tab-btn>
                Buy
              </button>
              <button className="tab-btn" data-tab-btn>
                Sell
              </button>
              <button className="tab-btn" data-tab-btn>
                Rent
              </button>
            </div>

            <form action="" className="hero-form">
              <div className="input-wrapper">
                <label htmlFor="search" className="input-label">
                  Search : *
                </label>

                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search your home"
                  required
                  className="input-field"
                  onChange={changeHandler}
                  value={searchText}
                />

                <div className="icon_search" >
                  <MdSearch />
                </div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="category" className="input-label">
                  Select Categories:
                </label>

                <select name="category" id="category" className="dropdown-list">
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="offices">Offices</option>
                  <option value="townhome">Townhome</option>
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="min-price" className="input-label">
                  Min Price :
                </label>

                <select
                  name="min-price"
                  id="min-price"
                  className="dropdown-list"
                >
                  <option value="min price">Min Price</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                  <option value="6000">6000</option>
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="max-price" className="input-label">
                  Max Price :
                </label>

                <select
                  name="max-price"
                  id="max-price"
                  className="dropdown-list"
                >
                  <option value="max price">Max Price</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                  <option value="6000">6000</option>
                </select>
              </div>


              <Link to="/NewSearch" state={{pappu:searchText}}>
              <button type="submit" className="btn btn-primary">
                Search now
              </button>
              </Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
