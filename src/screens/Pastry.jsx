import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import PastryPhotos from "../components/Pastry";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function About() {
  const [photoOpen, setPhotoOpen] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState([]);

  const openPhotoModal = (photo) => {
    setDisplayPhoto({ src: photo });
    setPhotoOpen(true);
  };

  return (
    <div className="home">
      <div className="content">
        <div className="display-content">
          <div className="photo-album" style={{ minHeight: "100vh" }}>
            <PhotoAlbum
              layout="masonry"
              columns={(containerWidth) => {
                if (containerWidth < 400) return 1;
                if (containerWidth < 600) return 2;
                return 3;
              }}
              photos={PastryPhotos}
              targetRowHeight={150}
              renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                <div
                  onClick={() => openPhotoModal(photo.src)}
                  style={wrapperStyle}
                >
                  {renderDefaultPhoto({ wrapped: true })}
                </div>
              )}
            />

            <Lightbox
              open={photoOpen}
              close={() => setPhotoOpen(false)}
              slides={[displayPhoto]}
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
