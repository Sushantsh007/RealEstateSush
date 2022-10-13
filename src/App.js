import logo from "./logo.svg";
import React from "react";

import "./App.css";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import NewSearch from "./components/NewSearch";
import Home from "./components/Home";

function App() {
  return (
    <>
      
      
      
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/NewSearch" element={<NewSearch />} />
      </Routes>
      
      
    </>
  );
}


export default App;
