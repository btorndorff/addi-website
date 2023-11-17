// have to modify with width, height
const imageFiles = [
  { src: "1t_Sb9EbTd3nv6YqgQXznnodafbz-kIta", width: 1536, height: 2317 },
  {
    src: "1Cl0u8AJgX1AzPiFLaLf98Ka1p-08tF0C",
    width: 2317,
    height: 1536,
  },
  {
    src: "1Y6BsPyi6hLBuNYa37OTqhhGrvM_3M0xi",
    width: 2317,
    height: 1536,
  },
  {
    src: "1EogkfdX_zdlZJ5CRTa9kTfLvQSKlgS2l",
    width: 2317,
    height: 1536,
  },
  {
    src: "1ihXOVaZ9bF_M37xrdAREkjnfR02UXP7c",
    width: 2317,
    height: 1536,
  },
  { src: "14BFnzYpkK_IvFdOsh9_PjPzTLAZZxckz", width: 2317, height: 1536 },
  { src: "1jaV3hBzyDkXFluoa7eXZeKN8fMV4TIU0", width: 2317, height: 1536 },
  { src: "1IJhoxgKJTbTXxFi_5ryUZw326NqtAWc9", width: 2234, height: 1536 },
  { src: "1hGu-1RQ0flNRElqypvhgMC3tjddj6lYR", width: 2317, height: 1536 },
  { src: "1pkNqOOR3okkFFmVHOFbBZqK1JuNl_Ekd", width: 2317, height: 1536 },
  { src: "19RZzu0vll2Y_vKl8wjkeeSmt6g83g_5X", width: 2317, height: 1536 },
  { src: "1j05GILVSez4BY0YngHTRFo7DfF7Qhhvx", width: 2317, height: 1536 },
  { src: "1O1S8j0RjOWUtm_-Hz-654vtXoGwbbTGR", width: 2317, height: 1536 },
  { src: "1WwMdurNMr3oWR23sDNy9Fde0N1notkFr", width: 2317, height: 1536 },
  {
    src: "1xwQNneTV0YtzBRhOgEjomrMPRewO7vq9",
    width: 1600,
    height: 1061,
  },
  {
    src: "1j5Vx8AX50BJteOk_FvVlmpGyFwSY5rE2",
    width: 1600,
    height: 1061,
  },
  {
    src: "16jllRG4EvtEqvsMp4nyXA3E1YnTKWfY2",
    width: 1600,
    height: 1061,
  },
  {
    src: "1o19P7In6KaANwlvanOstkcT-hmrYhj3N",
    width: 1600,
    height: 1061,
  },
  {
    src: "1gbFg6NAT2Mc-qEn7OmQywzv8kFw7E4m0",
    width: 1600,
    height: 1061,
  },
  {
    src: "1Z6g13A7Spmktd3J7b4F7CNmPOrC88bo3",
    width: 1600,
    height: 1061,
  },
  {
    src: "1EVrG_yu5tx4oFPXOZzbhV1nq8185ITLv",
    width: 1600,
    height: 1061,
  },
  {
    src: "1Qdklxh9f2LvUvX1cirwYsTIjwtFWwsGM",
    width: 2317,
    height: 1536,
  },
  {
    src: "1tswTlPsGKvr3-vbw_E5gODxKsqxpRdNv",
    width: 2317,
    height: 1536,
  },
  {
    src: "1OHlNbcBPCMRy_KcksU-kcpBamgHnNK9J",
    width: 2317,
    height: 1536,
  },
  {
    src: "1CAP9bFAEXS33z5O4j_NkWndw_r22jbYw",
    width: 2317,
    height: 1536,
  },
  {
    src: "1DONjG3LCMsqcZgHc85kwnXSL-GqNcZg9",
    width: 2317,
    height: 1536,
  },
  {
    src: "1WIB5A-VautjanHQ6tYR7J7jXKg1PuxmM",
    width: 2317,
    height: 1536,
  },
  {
    src: "17k-sGgIB-IbA8CQ6awFu9M_ne44IJLw_",
    width: 2317,
    height: 1536,
  },
  {
    src: "1k2-qkTWa6v4G-6VRnlCGCogYlmiNRCQF",
    width: 2317,
    height: 1536,
  },
  {
    src: "1CM-4ujXR8JM_RT-jwrAXYDrDUL41fzZX",
    width: 2317,
    height: 1536,
  },
  {
    src: "1OkmC736aID-DGIZvfjHJB4HX-sN89zSB",
    width: 2317,
    height: 1536,
  },
  {
    src: "1ibh1IBJHUTY7htF0oVYQ-wHUcAsa4ZFX",
    width: 2317,
    height: 1536,
  },
  {
    src: "1opo74f4ovvTa4rcHYYhClCzaf-d3z09r",
    width: 2317,
    height: 1536,
  },
  {
    src: "1nUKjo9NqMQm_t6grza6jp-rtbO89QgQK",
    width: 2317,
    height: 1536,
  },
  { src: "1rNH6PzP6dSSKZp9UEf2BU4YaJAe74cFa", width: 2317, height: 1536 },
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

const Photos = organizeImages(imageFiles);

export default Photos;
