const imageFiles = [
  {
    src: "8.jpeg",
    width: 1587,
    height: 2245,
  },
  {
    src: "10.jpeg",
    width: 2000,
    height: 1429,
  },
  {
    src: "7.jpeg",
    width: 3024,
    height: 4032,
  },
  {
    src: "2.JPG",
    width: 1536,
    height: 2049,
  },
  {
    src: "1.jpeg",
    width: 1536,
    height: 2049,
  },
  {
    src: "9.jpeg",
    width: 1242,
    height: 1332,
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
  {
    src: "6.jpeg",
    width: 3264,
    height: 2496,
  },

  {
    src: "11.jpeg",
    width: 2048,
    height: 2732,
  },
  {
    src: "12.jpeg",
    width: 2048,
    height: 2732,
  },
  {
    src: "13.jpeg",
    width: 2048,
    height: 2732,
  },
  {
    src: "14.jpeg",
    width: 2732,
    height: 2048,
  },
  {
    src: "15.jpeg",
    width: 2725,
    height: 1906,
  },
  {
    src: "whale/1.jpeg",
    width: 3024,
    height: 4032,
  },
  { src: "whale/2.jpeg", width: 3024, height: 4032 },
];

// const whaleFiles = [
//   {
//     src: "whale/1.jpeg",
//     width: 3024,
//     height: 4032,
//     title: "WHALE",
//   },
//   { src: "whale/2.jpeg", width: 3024, height: 4032 },
// ];

const chickenFiles = [
  {
    src: "coucouchicken/1.jpeg",
    width: 2732,
    height: 2048,
    title: "",
  },
  { src: "coucouchicken/2.jpeg", width: 3024, height: 4032 },
  { src: "coucouchicken/3.jpeg", width: 3024, height: 4032 },
  { src: "coucouchicken/4.jpeg", width: 3024, height: 4032 },
];

// Function to generate the array of objects
function organizeImages(files) {
  const filePath = "/assets/illustrations/";
  return files.map((file) => {
    return {
      src: filePath + file.src,
      width: file.width,
      height: file.height,
      title: !!file.title ? file.title : null,
    };
  });
}

export const IllustrationFiles = organizeImages(imageFiles);
// export const whaleCover = organizeImages(whaleFiles[0]);
export const chickenCover = organizeImages([chickenFiles[0]]);
export const chickenPhotos = organizeImages(chickenFiles);

// export default IllustrationFiles;
