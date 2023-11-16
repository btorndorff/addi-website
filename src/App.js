// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./screens/Home";
import videoBackground from "./assets/ghibli.mov";
import "./App.css";
import PhotoVideo from "./screens/PhotoVideo";
import Illustrations from "./screens/Illustrations";
// import Pastry from './Pastry';
// import Writing from './Writing';
import About from "./screens/About";

function App() {
  const { pathname } = useLocation();
  const initialTab = pathname == "/" ? "home" : pathname.replace("/", "");

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const changeSelectedTab = (tab) => {
    console.log("changed");
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="App">
        <video className="background" autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
        </video>
        <Navbar selectedTab={selectedTab} setSelectedTab={changeSelectedTab} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-video" element={<PhotoVideo />} />
        <Route path="/illustrations" element={<Illustrations />} />
        {/* <Route path="/pastry" element={Pastry} /> */}
        {/* <Route path="/writing" element={Writing} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
