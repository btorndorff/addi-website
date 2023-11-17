// have to modify with width, height
const imageFiles = [
  {
    src: "1NtNdhBD33XlfWTGnwfRrdqPhlf9EN_Yn",
    width: 1536,
    height: 2049,
  },
  {
    src: "1LuCrbvEsZrL3U_zT9ElsCSBXUq1_QIT9",
    width: 1536,
    height: 2049,
  },
  {
    src: "1qIarujwrKL7e3EQSj9xVwdcpRYuV8NmY",
    width: 2049,
    height: 1536,
  },
  {
    src: "1T_--Y9mSwWRpT6hdSiwdORYuw-kIIBMV",
    width: 2432,
    height: 1536,
  },
  {
    src: "1izprBa_Sa9LJNsq7BmzWApoWDcHANsb1",
    width: 2049,
    height: 1536,
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
    };
  });
}

const Illustrations = organizeImages(imageFiles);

export default Illustrations;
