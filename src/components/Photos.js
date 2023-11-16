// have to modify with width, height
const imageFiles = [
  { src: "000085990003.JPG", width: 1536, height: 2317 },
  { src: "000085990010.JPG", width: 2317, height: 1536 },
  { src: "000085990026.JPG", width: 2317, height: 1536 },
  { src: "000086000010.JPG", width: 2317, height: 1536 },
  { src: "000086000012.JPG", width: 2317, height: 1536 },
  { src: "000086000013.JPG", width: 2317, height: 1536 },
  { src: "000086000014.JPG", width: 2317, height: 1536 },
  { src: "eyeball.JPG", width: 2234, height: 1536 },
  { src: "230406000150860003.JPG", width: 2317, height: 1536 },
  { src: "230620000168000014.JPG", width: 2317, height: 1536 },
  { src: "230620000168000015.JPG", width: 2317, height: 1536 },
  { src: "230620000168000028.JPG", width: 2317, height: 1536 },
  { src: "IMG_1431.JPG", width: 2317, height: 1536 },
  { src: "IMG_1434.JPG", width: 2317, height: 1536 },
  { src: "IMG_1942.JPG", width: 1600, height: 1061 },
  { src: "IMG_1951.JPG", width: 1600, height: 1061 },
  { src: "IMG_1952.JPG", width: 1600, height: 1061 },
  { src: "IMG_1959.JPG", width: 1600, height: 1061 },
  { src: "IMG_2254.JPG", width: 1600, height: 1061 },
  { src: "IMG_2255.JPG", width: 1600, height: 1061 },
  { src: "IMG_2258.JPG", width: 1600, height: 1061 },
  { src: "IMG_2440.JPG", width: 2317, height: 1536 },
  { src: "IMG_2453.JPG", width: 2317, height: 1536 },
  { src: "IMG_6444.JPG", width: 2317, height: 1536 },
  { src: "IMG_8815.JPG", width: 2317, height: 1536 },
  { src: "IMG_8844.JPG", width: 2317, height: 1536 },
  { src: "IMG_9089.JPG", width: 2317, height: 1536 },
  { src: "IMG_9099.JPG", width: 2317, height: 1536 },
  { src: "IMG_9115.JPG", width: 2317, height: 1536 },
  { src: "IMG_9138.JPG", width: 2317, height: 1536 },
  { src: "IMG_9905.JPG", width: 2317, height: 1536 },
  { src: "IMG_9910.JPG", width: 2317, height: 1536 },
  { src: "IMG_9929.JPG", width: 2317, height: 1536 },
  { src: "IMG_9936.JPG", width: 2317, height: 1536 },
  { src: "IMG_9942.JPG", width: 2317, height: 1536 },
];

// Function to generate the array of objects
function organizeImages(files) {
  return files.map((file) => {
    const path = `/photos/${file.src}`;
    return {
      src: path,
      width: file.width,
      height: file.height,
    };
  });
}

const Photos = organizeImages(imageFiles);

export default Photos;
