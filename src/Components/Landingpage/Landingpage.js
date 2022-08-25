import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main-wrap">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
