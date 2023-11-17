// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./screens/Home";
import "./App.css";
import PhotoVideo from "./screens/PhotoVideo";
import Illustrations from "./screens/Illustrations";
import Pastry from "./screens/Pastry";
import Writing from "./screens/Writing";
import About from "./screens/About";

function App() {
  const { pathname } = useLocation();
  let initialTab = "home";
  if (pathname !== "/" || pathname !== "addi-website/") {
    initialTab = pathname.replace("/", "");
  }

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const changeSelectedTab = (tab) => {
    console.log("changed");
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="App">
        <img
          className="background"
          src="https://drive.google.com/uc?export=view&id=1UvgjBAi58_jEUbFSTnqgwCz1tbgkUkyL"
        />
        <Navbar selectedTab={selectedTab} setSelectedTab={changeSelectedTab} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-video" element={<PhotoVideo />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/pastry" element={<Pastry />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
