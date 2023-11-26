const imageFiles = [
  { src: "1.jpeg", width: 1536, height: 2317  },
  { src: "2.jpeg", width: 2317, height: 1536 },
  { src: "3.jpeg", width: 2317, height: 1536 },
  { src: "4.jpeg", width: 2317, height: 1536 },
  { src: "5.jpeg", width: 2317, height: 1536 },
  { src: "6.jpeg", width: 2317, height: 1536 },
  { src: "7.jpeg", width: 2317, height: 1536 },
  { src: "8.HEIC", width: 2234, height: 1536 },
  { src: "9.jpg", width: 2317, height: 1536 },
  { src: "10.jpg", width: 2317, height: 1536 },
  { src: "11.jpg", width: 2317, height: 1536 },
  { src: "12.jpg", width: 2317, height: 1536 },
  { src: "13.jpg", width: 2317, height: 1536 },
  { src: "14.jpg", width: 2317, height: 1536 },
  { src: "15.jpg", width: 1600, height: 1061 },
  { src: "16.jpg", width: 1600, height: 1061 },
  { src: "17.jpg", width: 1600, height: 1061 },
  { src: "18.jpg", width: 1600, height: 1061 },
  { src: "19.jpg", width: 1600, height: 1061 },
  { src: "20.jpg", width: 1600, height: 1061 },
  { src: "21.jpg", width: 1600, height: 1061 },
  { src: "22.jpg", width: 2317, height: 1536 },
  { src: "23.jpg", width: 2317, height: 1536 },
  { src: "24.jpg", width: 2317, height: 1536 },
  { src: "25.jpg", width: 2317, height: 1536 },
  { src: "26.jpg", width: 2317, height: 1536 },
  { src: "27.jpg", width: 2317, height: 1536 },
  { src: "28.jpg", width: 2317, height: 1536 }, 
  { src: "29.jpg", width: 2317, height: 1536 },
  { src: "30.jpg", width: 2317, height: 1536 },
  { src: "31.jpg", width: 2317, height: 1536 },
  { src: "32.jpg", width: 2317, height: 1536 },
  { src: "33.jpg", width: 2317, height: 1536 },
  { src: "34.jpg", width: 2317, height: 1536 },
  { src: "35.jpg", width: 2317, height: 1536 }
];


const fishFiles = [
  { src: "fish/1.jpeg", width: 1089, height: 722, title: "OPHELIA STINKS OF ROSES AND BUSINESS CASUAL" },
  { src: "fish/2.jpeg", width: 1089, height: 722 },
  { src: "fish/3.jpeg", width: 1089, height: 722 },
  { src: "fish/4.jpeg", width: 1089, height: 722 },
  { src: "fish/5.jpeg", width: 1089, height: 722 },
  { src: "fish/6.jpeg", width: 1089, height: 722 },
  { src: "fish/7.jpeg", width: 1089, height: 722 },
  { src: "fish/8.jpeg", width: 1089, height: 722 },
  { src: "fish/9.jpeg", width: 1089, height: 722 },
  { src: "fish/10.jpeg", width: 1089, height: 722 },
  { src: "fish/11.jpeg", width: 1089, height: 722 },
  { src: "fish/12.jpeg", width: 1089, height: 722 },
  { src: "fish/13.jpeg", width: 1089, height: 722 },
  { src: "fish/14.jpeg", width: 1089, height: 722 },
  { src: "fish/15.jpeg", width: 1089, height: 722 },
];

function organizeImages(files) {
  const filePath = "/assets/photos/"
  return files.map((file) => {
    return {
      src: filePath + file.src,
      width: file.width,
      height: file.height,
      title: !!file.title ? file.title : null,
    };
  });
}

export const Photos = organizeImages(imageFiles);
export const FishCover = organizeImages([fishFiles[0]]);
export const FishPhotos = organizeImages(fishFiles);

export default Photos;
