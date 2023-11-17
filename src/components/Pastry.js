// have to modify with width, height
const imageFiles = [
  // 1,170 x 1,412
  {
    src: "14P8in0uE18_60vBTvrEwRhLOaDXz-N1y",
    width: 1170,
    height: 1412,
  },
  { src: "11OOWVfc5DiVMbQ7QqBX0mOjc9A-lnqBM", width: 2317, height: 1536 },
  { src: "1prd4_O2b8OdIGctCA7dLzf9mjPE5WGWa", width: 2317, height: 1536 },
  { src: "1SfBOIwIbK4GqBlGbbctzkYq8y1IW68Zb", width: 2234, height: 1536 },
  { src: "1WVt685A0_gN0nPrXwHVBFGVeiTrN-zIs", width: 2317, height: 1536 },
  { src: "1tsesTDuGpMSJhoG6cESmIKf05chQLBtF", width: 2317, height: 1536 },
];

// Function to generate the array of objects
function organizeImages(files) {
  const link = "https://drive.google.com/uc?export=view&id=";
  return files.map((file) => {
    return {
      src: link + file.src,
      width: 1170,
      height: 1412,
    };
  });
}

const PastryPhotos = organizeImages(imageFiles);

export default PastryPhotos;
