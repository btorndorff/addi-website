// have to modify with width, height
const imageFiles = [
  { src: "1.png", width: 1154, height: 1716, title: "FEED ME" },
  { src: "2.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "3.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "4.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "5.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "6.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "7.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "8.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "9.png", width: 2215, height: 1697, title: "FEED ME" },
  { src: "10.png", width: 1154, height: 1716, title: "FEED ME" },
];

// Function to generate the array of objects
function organizeImages(files) {
  return files.map((file) => {
    const path = `/zine/${file.src}`;
    return {
      src: path,
      width: file.width,
      height: file.height,
      title: file.title,
    };
  });
}

export const ZineCover = organizeImages([imageFiles[0]]);
export const Zine = organizeImages(imageFiles);
