import React from "react";
import image from "../../assets/header-x1.png";
import "./Jumbotron.min.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <img className="jumbotron-image" src={image} alt="Header" />
      <h1 className="jumbotron-title">Electronics</h1>
    </div>
  );
}

export default Jumbotron;
