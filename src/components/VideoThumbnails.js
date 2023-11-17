const videoThumbnails = [
  {
    name: "tabi_tabi_po",
    width: 3024,
    height: 1697,
    title: "TABI TABI PO",
    src: "https://drive.google.com/uc?export=view&id=1UvgjBAi58_jEUbFSTnqgwCz1tbgkUkyL",
    videoSrc:
      "https://drive.google.com/uc?export=view&id=1f5dsMM5Xqi2f8G9lYuGuvl5zXmN4okmf",
  },
  {
    name: "off_the_walls",
    width: 3024,
    height: 1697,
    title: "OFF THE WALLS",
    src: "https://drive.google.com/uc?export=view&id=1WMig74KcmdxY1P8PlsGHG_uXd6yuFFtU",
    videoSrc:
      "https://drive.google.com/uc?export=view&id=1S0wU7sb1K7x5siWcatQ3H6AUv7jZiHgW",
  },
];

// Function to generate the array of objects
function organizeImages(files) {
  return files.map((file) => {
    console.log(file);
    return {
      src: file.src,
      width: file.width,
      height: file.height,
      title: file.title,
    };
  });
}

const Videos = videoThumbnails;

export default Videos;
