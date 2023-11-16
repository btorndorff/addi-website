const videoThumbnails = [
  {
    name: "tabi_tabi_po.gif",
    width: 3024,
    height: 1697,
    title: "TABI TABI PO",
    videoSrc: "public/videos/tabi_tabi_po.mp4",
    videoLink:
      "https://www.youtube.com/watch?v=XNPQpANWvg4&ab_channel=AddiGilliam",
  },
  //   need to get gif of this
  {
    name: "off_the_walls.png",
    width: 3024,
    height: 1697,
    title: "OFF THE WALLS",
    videoSrc: "public/videos/off_the_walls.mp4",
  },
];

// Function to generate the array of objects
function organizeImages(files) {
  return files.map((file) => {
    console.log(file);
    const path = `/videos/${file.name}`;
    return {
      src: path,
      width: file.width,
      height: file.height,
      title: file.title,
    };
  });
}

const Videos = organizeImages(videoThumbnails);

export default Videos;
