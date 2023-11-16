import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";

export default function About() {
  return (
    <div className="home">
      <div className="content">
        <div
          className="display-content"
          style={{ display: "flex", color: "black", minHeight: "100%" }}
        >
          <img src="addi.jpg" style={{ width: "500px" }} />
          <p>addi is suppper cool</p>
        </div>
      </div>
    </div>
  );
}
