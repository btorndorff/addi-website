import { React } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import "../styles/writing.css";
import LazyLoadingImg from "../components/LazyLoadingImg";

const WritingCard = ({ title, description, image, link }) => {
  let styleTitle = "writing-card-image";
  if (title === "The Past we Take Forward: Finding Community in Living Well") {
    styleTitle = "writing-card-image-1";
  }

  return (
    <div
      className="writing-card"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    >
      <div className={styleTitle}>
        <LazyLoadingImg imageSrc={image} alt={title} />
      </div>

      <div className="writing-card-content">
        <h3>{title}</h3>
        <hr className="w-100 pb-1" />
        <p>{description}</p>
      </div>
    </div>
  );
};

const writingData = [
  {
    title: "The Past we Take Forward: Finding Community in Living Well",
    description:
      "A writing about my experience with the Older Writers Lab (OWLS)",
    image: "/assets/writing/owls.png",
    link: "https://drive.google.com/file/d/1pCro-xMXf95iLZGywzzkB54u2KRxCatU/view?usp=drive_link",
  },
  {
    title: "Collection of Poems",
    description: "\n\n",
    image: "/assets/writing/poems.jpeg",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "A Walk Through Her Garden",
    description:
      "Short game developed on twine. Orignial art and writing and coded with the help of Benjamin Orndorff.",
    image: "/assets/writing/game.png",
    link: "/A Walk Through her Garden.html",
  },
];

export default function Writing({ isMobileView }) {
  console.log(isMobileView);

  const writingDataArray = writingData.map((writing) => (
    <WritingCard
      title={writing.title}
      description={writing.description}
      image={writing.image}
      link={writing.link}
    />
  ));

  return (
    <div>
      {isMobileView ? (
        <div className="absolute w-full min-h-full flex flex-col justify-center items-center text-white z-0 overflow-scroll">
          <div className="content">
            <div className="display-content">
              <div
                className="display-content"
                style={{
                  height: "100%",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "110px",
                  }}
                >
                  <div>{writingDataArray[0]}</div>
                  <div>{writingDataArray[1]}</div>
                  <div>{writingDataArray[2]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home">
          <div className="content">
            <div className="display-content">
              <div
                className="display-content"
                style={{
                  height: "100%",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginTop: "110px",
                  }}
                >
                  <div style={{ gridColumn: "1 / span 2" }}>
                    {writingDataArray[0]}
                  </div>
                  <div>{writingDataArray[1]}</div>
                  <div>{writingDataArray[2]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
