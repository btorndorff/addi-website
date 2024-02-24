import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadingImg = ({ imageSrc, altText }) => {
  return (
    <LazyLoadImage
      src={imageSrc} // the source of the image
      alt={altText} // alternative text for the image
      effect="blur" // effect used when the image is loading (optional)
      height="auto" // height of the image (optional)
      width="100%" // width of the image (optional)
    />
  );
};

export default LazyLoadingImg;
