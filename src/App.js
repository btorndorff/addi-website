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

function DesktopMessage() {
  return <p>Please use this site on desktop!</p>;
}

function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const { pathname } = useLocation();
  let initialTab = "home";
  if (pathname !== "/" && pathname !== "/addi-website" && pathname !== "") {
    initialTab = pathname.replace("/", "");
  }

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const changeSelectedTab = (tab) => {
    console.log("changed");
    setSelectedTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobileView && (
        <div className="App">
          <img
            className="background"
            src="/assets/ghibli.GIF"
          />
          <Navbar
            selectedTab={selectedTab}
            setSelectedTab={changeSelectedTab}
          />
        </div>
      )}

      <Routes>
        {isMobileView ? (
          <>
            <Route path="/" element={<DesktopMessage />} />
            <Route path="/addi-website" element={<DesktopMessage />} />
            <Route path="" element={<DesktopMessage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/addi-website" element={<Home />} />
            <Route path="" element={<Home />} />
          </>
        )}
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
