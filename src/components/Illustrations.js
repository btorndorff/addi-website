// have to modify with width, height
const imageFiles = [
  { src: "IMG_0022.JPG", width: 1536, height: 2049 },
  { src: "IMG_0261.JPG", width: 1536, height: 2049 },
  { src: "IMG_0265.JPG", width: 2049, height: 1536 },
  { src: "IMG_0273.JPG", width: 2432, height: 1536 },
  { src: "Untitled_Artwork.JPG", width: 2049, height: 1536 },
];

// Function to generate the array of objects
function organizeImages(files) {
  return files.map((file) => {
    const path = `/illustrations/${file.src}`;
    return {
      src: path,
      width: file.width,
      height: file.height,
    };
  });
}

const Illustrations = organizeImages(imageFiles);

export default Illustrations;
