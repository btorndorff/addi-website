import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import PastryPhotos from "../components/Pastry";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "../components/Slideshow";

export default function Pastry({ isMobileView }) {
  return (
    <div>
      {isMobileView ? (
        <div className="absolute w-full min-h-full flex flex-col justify-center items-center text-white z-0 overflow-scroll">
          <div className="content">
            <div className="display-content">
              <div className="photo-album" style={{ minHeight: "100vh" }}>
                <Slideshow props={PastryPhotos} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home">
          <div className="content">
            <div className="display-content">
              <div className="photo-album" style={{ minHeight: "100vh" }}>
                <Slideshow props={PastryPhotos} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
