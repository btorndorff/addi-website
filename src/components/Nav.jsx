import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nav({ selectedTab, setSelectedTab, isMobileView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };

  let color = "#9A1A31";
  let selectedColor = "#9A1A31";
  const TRANSPARENT = "#FF";
  if (selectedTab === "home") {
    color = "#FFF27D";
    selectedColor = "#A9A265C9";
  }

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuLinkClick = (tab) => {
    scrollToTop();
    setSelectedTab(tab);
    setMenuOpen(false);
  };

  return (
    <div className="container z-10">
      {isMobileView ? (
        <div
          className={`flex mt-3 z-10 fixed top-3 left-5 ${
            selectedTab === "home" ? "text-[#fff27d]" : "text-[#9A1A31]"
          }`}
          onClick={handleMenuClick}
        >
          {menuOpen ? (
            <CloseIcon style={{ fontSize: "3rem" }} />
          ) : (
            <MenuIcon style={{ fontSize: "3rem" }} />
          )}
        </div>
      ) : (
        <div className="container w-85 mx-auto text-center absolute top-14 z-10">
          <nav className="nav-style">
            <ul className="ul-web">
              <Link
                to="/"
                className={selectedTab === "home" ? "selected-home" : ""}
                onClick={() => setSelectedTab("home")}
                style={{ color, borderColor: color }}
              >
                Home
              </Link>
              <Link
                to="/photo-video"
                className={selectedTab === "photo-video" ? "selected" : ""}
                onClick={() => setSelectedTab("photo-video")}
                style={{ color, borderColor: color }}
              >
                Photo/Video
              </Link>
              <Link
                to="/writing"
                className={selectedTab === "writing" ? "selected" : ""}
                onClick={() => setSelectedTab("writing")}
                style={{ color, borderColor: color }}
              >
                Writing
              </Link>
              <Link
                to="/illustrations"
                className={selectedTab === "illustrations" ? "selected" : ""}
                onClick={() => setSelectedTab("illustrations")}
                style={{ color, borderColor: color }}
              >
                Illustrations
              </Link>
              <Link
                to="/pastry"
                className={selectedTab === "pastry" ? "selected" : ""}
                onClick={() => setSelectedTab("pastry")}
                style={{ color, borderColor: color }}
              >
                Pastry
              </Link>

              <Link
                to="/about"
                className={selectedTab === "about" ? "selected" : ""}
                onClick={() => setSelectedTab("about")}
                style={{ color, borderColor: color }}
              >
                About
              </Link>
            </ul>
          </nav>
          <div className="navbox" style={{ borderColor: color }}></div>
        </div>
      )}
      {isMobileView && menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-75 flex justify-center items-center">
          <nav className="text-white text-4xl">
            <ul className="flex flex-col gap-y-3">
              <Link
                to="/"
                className={selectedTab === "home" ? "text-[#FFF27D]" : ""}
                onClick={() => handleMenuLinkClick("home")}
              >
                Home
              </Link>
              <Link
                to="/photo-video"
                className={
                  selectedTab === "photo-video" ? "text-[#9A1A31]" : ""
                }
                onClick={() => handleMenuLinkClick("photo-video")}
              >
                Photo/Video
              </Link>
              <Link
                to="/writing"
                className={selectedTab === "writing" ? "text-[#9A1A31]" : ""}
                onClick={() => handleMenuLinkClick("writing")}
              >
                Writing
              </Link>
              <Link
                to="/illustrations"
                className={
                  selectedTab === "illustrations" ? "text-[#9A1A31]" : ""
                }
                onClick={() => handleMenuLinkClick("illustrations")}
              >
                Illustrations
              </Link>
              <Link
                to="/pastry"
                className={selectedTab === "pastry" ? "text-[#9A1A31]" : ""}
                onClick={() => handleMenuLinkClick("pastry")}
              >
                Pastry
              </Link>
              <Link
                to="/about"
                className={selectedTab === "about" ? "text-[#9A1A31]" : ""}
                onClick={() => handleMenuLinkClick("about")}
              >
                About
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Nav;
