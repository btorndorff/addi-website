const imageFiles = [
  { src: "1.jpg", width: 2215, heigth: 1697 },
  { src: "2.jpg", width: 2215, heigth: 1697 },
  { src: "3.jpg", width: 2215, heigth: 1697 },
  { src: "4.jpg", width: 2215, heigth: 1697 },
  { src: "5.jpg", width: 2215, heigth: 1697 },
  { src: "6.jpg", width: 2215, heigth: 1697 },
  { src: "7.jpg", width: 2215, heigth: 1697 },
  { src: "8.jpg", width: 2215, heigth: 1697 },
  { src: "9.jpg", width: 2215, heigth: 1697 },
  { src: "10.jpg", width: 2215, heigth: 1697 },
]

function organizeImages(files) {
  const filePath = "/assets/illustrations/zine/"
  return files.map((file) => {
    return {
      src: filePath + file.src,
      width: file.width,
      height: file.height,
      title: !!file.title ? file.title : null,
    };
  });
}

export const ZineCover = [{src: "/assets/illustrations/zine/cover.jpg", width: 1730, height: 2574 , title: "FEED ME"}];
export const Zine = organizeImages(imageFiles);
