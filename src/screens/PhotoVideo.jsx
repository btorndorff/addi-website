import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import Photos from "../components/Photos";
import Videos from "../components/VideoThumbnails";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

function _replaceExtensionWithMp4(filePath) {
  const pathArray = filePath.split(".");
  pathArray[pathArray.length - 1] = "mp4";
  return pathArray.join(".");
}

function PhotoVideo() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [displayVideo, setDisplayVideo] = useState([]);

  const [photoOpen, setPhotoOpen] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState([]);

  const openPhotoModal = (photo) => {
    setDisplayPhoto({ src: photo });
    setPhotoOpen(true);
  };

  const openVideoModal = (video) => {
    setDisplayVideo({
      type: "video",
      width: 1280,
      height: 720,
      poster: `/videos/${video.src}`,
      sources: [
        {
          src: _replaceExtensionWithMp4(video.src),
          type: "video/mp4",
        },
      ],
    });
    setVideoOpen(true);
  };

  return (
    <div className="home">
      <div className="content">
        <div className="display-content">
          <div className="photo-album">
            <PhotoAlbum
              layout="rows"
              photos={Videos}
              targetRowHeight={200}
              renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                <div
                  className="video-container"
                  style={wrapperStyle}
                  onClick={() => openVideoModal(photo)}
                >
                  <div className="photo-div">
                    {renderDefaultPhoto({ wrapped: true })}
                  </div>
                  <p style={{ color: "inherit" }}>{photo.title}</p>
                </div>
              )}
            />

            <Lightbox
              open={videoOpen}
              close={() => setVideoOpen(false)}
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
              }}
              slides={[displayVideo]}
              plugins={[Video]}
            />

            <PhotoAlbum
              layout="masonry"
              columns={(containerWidth) => {
                if (containerWidth < 400) return 1;
                if (containerWidth < 600) return 2;
                return 3;
              }}
              photos={Photos}
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

export default PhotoVideo;
