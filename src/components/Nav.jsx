import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav({ selectedTab, setSelectedTab }) {
  let color = "#9A1A31";
  let selectedColor = "#D9798AC9";
  const TRANSPARENT = "#FF";
  if (selectedTab === "home") {
    color = "#FFF27D";
    selectedColor = "#A9A265C9";
  }

  return (
    <div className="container">
      <nav>
        <ul>
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
            to="/writing"
            className={selectedTab === "writing" ? "selected" : ""}
            onClick={() => setSelectedTab("writing")}
            style={{ color, borderColor: color }}
          >
            Writing
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
  );
}

export default Nav;
