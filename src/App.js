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
import LazyLoadingImg from "./components/LazyLoadingImg";

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
  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const changeSelectedTab = (tab) => {
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

  useEffect(() => {
    let tabName = location.pathname.replace("/", "");

    if (tabName === "#" || tabName === "") tabName = "home";
    changeSelectedTab(tabName);
  }, [location]);

  return (
    <>
      <div className="App">
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full fixed"
            src="/assets/ghibli.GIF"
          />
        </div>

        <Navbar
          selectedTab={selectedTab}
          setSelectedTab={changeSelectedTab}
          isMobileView={isMobileView}
        />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isMobileView={isMobileView}
              setSelectedTab={changeSelectedTab}
            />
          }
        />
        <Route
          path="/#"
          element={
            <Home
              isMobileView={isMobileView}
              setSelectedTab={changeSelectedTab}
            />
          }
        />
        <Route
          path="/addi-website"
          element={
            <Home
              isMobileView={isMobileView}
              setSelectedTab={changeSelectedTab}
            />
          }
        />
        <Route
          path=""
          element={
            <Home
              isMobileView={isMobileView}
              setSelectedTab={changeSelectedTab}
            />
          }
        />
        <Route
          path="/photo-video"
          element={<PhotoVideo isMobileView={isMobileView} />}
        />
        <Route
          path="/illustrations"
          element={<Illustrations isMobileView={isMobileView} />}
        />
        <Route
          path="/pastry"
          element={<Pastry isMobileView={isMobileView} />}
        />
        <Route
          path="/writing"
          element={<Writing isMobileView={isMobileView} />}
        />
        <Route path="/about" element={<About isMobileView={isMobileView} />} />
      </Routes>
    </>
  );
}

export default App;
