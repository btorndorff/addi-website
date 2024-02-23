import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import {
  IllustrationFiles,
  chickenCover,
  chickenPhotos,
} from "../components/Illustrations";
import { ZineCover, Zine } from "../components/Zine";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Illustrations() {
  const [photoOpen, setPhotoOpen] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState([]);

  const [toteOpen, setToteOpen] = useState(false);
  const [displayTote, setDisplayTote] = useState([]);

  const [zineOpen, setZineOpen] = useState(false);

  const openZineModal = (photo) => {
    setZineOpen(true);
  };

  const openPhotoModal = (photo) => {
    setDisplayPhoto({ src: photo });
    setPhotoOpen(true);
  };

  const openToteModal = (photo) => {
    setDisplayTote({ src: photo });
    setToteOpen(true);
  };

  console.log(IllustrationFiles);
  return (
    <div className="home">
      <div className="content">
        <div className="display-content">
          <div className="photo-album">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="one-column">
                <PhotoAlbum
                  layout="columns"
                  columns={1}
                  photos={ZineCover}
                  rowConstraints={{ singleRowMaxHeight: 500 }}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      className="video-container"
                      style={wrapperStyle}
                      onClick={() => openZineModal(photo)}
                    >
                      <div
                        className="photo-div"
                        style={{
                          boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {renderDefaultPhoto({ wrapped: true })}
                      </div>
                      <p style={{ color: "inherit" }}>{photo.title}</p>
                    </div>
                  )}
                />

                <Lightbox
                  open={zineOpen}
                  close={() => setZineOpen(false)}
                  slides={Zine}
                  render={{ iconSlideshowPlay: () => null }}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="one-column">
                <PhotoAlbum
                  layout="columns"
                  columns={1}
                  photos={chickenCover}
                  rowConstraints={{ singleRowMaxHeight: 500 }}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      className="video-container"
                      style={wrapperStyle}
                      onClick={() => openToteModal(photo)}
                    >
                      <div
                        className="photo-div"
                        style={{
                          boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {renderDefaultPhoto({ wrapped: true })}
                      </div>
                      <p style={{ color: "inherit" }}>{photo.title}</p>
                    </div>
                  )}
                />

                <Lightbox
                  open={toteOpen}
                  close={() => setToteOpen(false)}
                  slides={chickenPhotos}
                  render={{ iconSlideshowPlay: () => null }}
                />
              </div>
            </div>

            <PhotoAlbum
              layout="masonry"
              columns={(containerWidth) => {
                if (containerWidth < 400) return 1;
                if (containerWidth < 600) return 2;
                return 3;
              }}
              photos={IllustrationFiles}
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
