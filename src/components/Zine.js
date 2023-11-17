// have to modify with width, height
const imageFiles = [
  {
    src: "1vQFrnwlOf5-n5KOaMSioho_lH2JbpTXg",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1rikeK47NnAaHNCefzB4n0m6NVcLXTeE0",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1qGdprbXyHgNmWAwU0sckJwMzswJGd9cP",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1bqbmDEI6GsnnnQ93r1LKrNlIoq4vTtY4",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1Q3ty7_mxXWedVODREWjweg1hd78H8Eed",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1bKldGODSm4AS3CB_ssnPezJPmcnVgeQx",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1vzlWRNKpLnKX6NaTuboZCZWgKc0_uPu_",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1mThuzDfXOBFvB4S4DBxoHOKzGrvFOd3n",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1hOQro-PUZ7KY_2viLT6Yosxcp27uOH7P",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
  {
    src: "1XqUPoDPI5WDFEUvlR-mXyxChdrzyXtcg",
    width: 2215,
    height: 1697,
    title: "FEED ME",
  },
];

// Function to generate the array of objects
function organizeImages(files) {
  const link = "https://drive.google.com/uc?export=view&id=";
  return files.map((file) => {
    return {
      src: link + file.src,
      width: file.width,
      height: file.height,
      title: file.title,
    };
  });
}

export const ZineCover = organizeImages([imageFiles[0]]);
export const Zine = organizeImages(imageFiles);
