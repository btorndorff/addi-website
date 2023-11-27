import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import PastryPhotos from "../components/Pastry";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "../components/Slideshow";

export default function Pastry() {

  return (
    <div className="home">
      <div className="content">
        <div className="display-content">
          <div className="photo-album" style={{ minHeight: "100vh" }}>
            <Slideshow props={PastryPhotos}/>
          </div>
        </div>
      </div>
    </div>
  );
}
