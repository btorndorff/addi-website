import { React, useState } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import PastryPhotos from "./Pastry";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LazyLoadingImg from "./LazyLoadingImg";

export default function Slideshow({ ...props }) {
  const photos = props.props;
  const photoCovers = photos.map((p, i) => ({ ...p[0], index: i }));
  const [photosOpen, setPhotosOpen] = useState(false);
  const [slidePhotos, setSlidePhotos] = useState(null);

  const openPhotoModal = (index) => {
    setSlidePhotos(photos[index]);
    setPhotosOpen(true);
  };

  return (
    <>
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 600) return 2;
          return 3;
        }}
        photos={photoCovers}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={wrapperStyle} onClick={() => openPhotoModal(photo.index)}>
            {/* Render the LazyLoadingImg component instead of the image directly */}
            <LazyLoadingImg imageSrc={photo.src} altText={photo.alt} />
          </div>
        )}
      />

      <Lightbox
        open={photosOpen}
        close={() => setPhotosOpen(false)}
        carousel={{
          finite: true,
        }}
        slides={slidePhotos}
        render={{ iconSlideshowPlay: () => null }}
      />
    </>
  );
}
