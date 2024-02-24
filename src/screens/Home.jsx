import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home({ isMobileView, setSelectedTab }) {
  return isMobileView ? (
    <div className="absolute w-full min-h-full flex flex-col justify-center items-center text-white z-0 overflow-hidden">
      <h1 className="text-7xl ">ADRIENNE GILLIAM!</h1>
      <button
        className=" py-2 px-4 rounded-lg border-2 border-[#fff27d] text-[#fff27d] mb-[50%] mt-3 brandon-font font-semibold"
        onClick={() => setSelectedTab("photo-video")}
      >
        <Link to={"/photo-video"}> Check me out!</Link>
      </button>
    </div>
  ) : (
    <div className="home">
      <div className="content">
        <h1 className="title">ADRIENNE GILLIAM!</h1>
      </div>
    </div>
  );
}

export default Home;
