// have to modify with width, height
const imageFiles = [
  {
    src: "1.PNG",
    width: 1536,
    height: 2049,
  },
  {
    src: "2.JPG",
    width: 1536,
    height: 2049,
  },
  {
    src: "3.JPG",
    width: 2049,
    height: 1536,
  },
  {
    src: "4.JPG",
    width: 2432,
    height: 1536,
  },
  {
    src: "5.heic",
    width: 2049,
    height: 1536,
  },
];

// Function to generate the array of objects
function organizeImages(files) {
  const filePath = "/assets/illustrations/"
  return files.map((file) => {
    return {
      src: filePath + file.src,
      width: file.width,
      height: file.height,
    };
  });
}

const Illustrations = organizeImages(imageFiles);

export default Illustrations;
