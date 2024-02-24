import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import { Photos, FishCover, FishPhotos } from "../components/Photos";
import Videos from "../components/VideoThumbnails";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import LayersIcon from "@mui/icons-material/AutoAwesomeMotion";
import VideoIcon from "@mui/icons-material/PlayCircleOutline";
import LazyLoadingImg from "../components/LazyLoadingImg";

function _replaceExtensionWithMp4(filePath) {
  const pathArray = filePath.split(".");
  pathArray[pathArray.length - 1] = "mp4";
  return pathArray.join(".");
}

function PhotoVideo({ isMobileView }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [displayVideo, setDisplayVideo] = useState([]);

  const [photoOpen, setPhotoOpen] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState([]);

  const [fishOpen, setFishOpen] = useState(false);
  const [displayFish, setDisplayFish] = useState([]);

  const openFishModal = (photo) => {
    setDisplayFish({ src: photo });
    setFishOpen(true);
  };

  const openPhotoModal = (photo) => {
    setDisplayPhoto({ src: photo });
    setPhotoOpen(true);
  };

  const openVideoModal = (video) => {
    window.open(video.videoSrc, "_blank", "noopener,noreferrer");
    // if (video.name === "off_the_walls") {
    //   window.open(video.videoSrc, "_blank", "noopener,noreferrer");
    // } else {
    //   setDisplayVideo({
    //     type: "video",
    //     width: 1280,
    //     height: 720,
    //     poster: video.src,
    //     sources: [
    //       {
    //         src: video.videoSrc,
    //         type: "video/mp4",
    //       },
    //     ],
    //   });
    //   setVideoOpen(true);
    // }
  };

  return (
    <div>
      {isMobileView ? (
        <div className="absolute w-full min-h-full flex flex-col justify-center items-center text-white z-0 overflow-scroll">
          <div className="content">
            <div className="display-content">
              <div className="photo-album">
                {/* videos */}
                <PhotoAlbum
                  layout="columns"
                  photos={Videos}
                  targetRowHeight={200}
                  columns={1}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      className="video-container relative"
                      style={wrapperStyle}
                      onClick={() => openVideoModal(photo)}
                    >
                      {/* Video icon */}
                      <VideoIcon className="absolute top-0 right-0 m-2 text-white opacity-75" />

                      <div>
                        <LazyLoadingImg imageSrc={photo.src} />
                      </div>
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

                {/* fish photos */}

                <PhotoAlbum
                  layout="columns"
                  columns={1}
                  photos={FishCover}
                  rowConstraints={{ singleRowMaxHeight: 500 }}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      className="video-container relative"
                      style={wrapperStyle}
                      onClick={() => openFishModal(photo)}
                    >
                      {/* Layers icon */}
                      <LayersIcon className="absolute top-0 right-0 m-2 text-white opacity-50" />

                      <div>
                        <LazyLoadingImg imageSrc={photo.src} />
                      </div>
                    </div>
                  )}
                />

                <Lightbox
                  open={fishOpen}
                  close={() => setFishOpen(false)}
                  slides={FishPhotos}
                  render={{ iconSlideshowPlay: () => null }}
                />

                {/* film photos */}
                <PhotoAlbum
                  layout="masonry"
                  columns={(containerWidth) => {
                    if (containerWidth < 400) return 1;
                    if (containerWidth < 600) return 2;
                    return 3;
                  }}
                  photos={Photos}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      onClick={() => openPhotoModal(photo.src)}
                      style={wrapperStyle}
                    >
                      <LazyLoadingImg imageSrc={photo.src} />
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
      ) : (
        <div className="home">
          <div className="content">
            <div className="display-content">
              <div className="photo-album">
                {/* videos */}
                <PhotoAlbum
                  layout="rows"
                  photos={Videos}
                  targetRowHeight={200}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      className="video-container"
                      style={wrapperStyle}
                      onClick={() => openVideoModal(photo)}
                    >
                      <div className="photo-div">
                        {renderDefaultPhoto({ wrapped: true })}
                      </div>

                      <p style={{ color: "inherit", fontSize: "1vw" }}>
                        {photo.title}
                      </p>
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

                {/* fish photos */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="one-column">
                    <PhotoAlbum
                      layout="columns"
                      columns={1}
                      photos={FishCover}
                      rowConstraints={{ singleRowMaxHeight: 500 }}
                      renderPhoto={({
                        photo,
                        wrapperStyle,
                        renderDefaultPhoto,
                      }) => (
                        <div
                          className="video-container"
                          style={wrapperStyle}
                          onClick={() => openFishModal(photo)}
                        >
                          <div className="photo-div">
                            <LazyLoadingImg imageSrc={photo.src} />
                          </div>
                          <p style={{ color: "inherit", fontSize: "1vw" }}>
                            {photo.title}
                          </p>
                        </div>
                      )}
                    />

                    <Lightbox
                      open={fishOpen}
                      close={() => setFishOpen(false)}
                      slides={FishPhotos}
                      render={{ iconSlideshowPlay: () => null }}
                    />
                  </div>
                </div>

                {/* film photos */}
                <PhotoAlbum
                  layout="masonry"
                  columns={(containerWidth) => {
                    if (containerWidth < 400) return 1;
                    if (containerWidth < 600) return 2;
                    return 3;
                  }}
                  photos={Photos}
                  renderPhoto={({
                    photo,
                    wrapperStyle,
                    renderDefaultPhoto,
                  }) => (
                    <div
                      onClick={() => openPhotoModal(photo.src)}
                      style={wrapperStyle}
                    >
                      <LazyLoadingImg imageSrc={photo.src} />
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
      )}
    </div>
  );
}

export default PhotoVideo;
