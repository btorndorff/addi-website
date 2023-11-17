import { React } from "react";
import "../styles/home.css";
import "../styles/photo.css";
import "../styles/writing.css";

const WritingCard = ({ title, description, image, link }) => {
  console.log(link);

  return (
    <div
      className="writing-card"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    >
      <div className="writing-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="writing-card-content">
        <h3>{title}</h3>
        <hr style={{ width: "100%" }} />
        <p>{description}</p>
      </div>
    </div>
  );
};

const writingData = [
  {
    title: "The Past We Take For Granted",
    description:
      "A writing about my experience with the Old Writings Lab (OWLS)",
    image:
      "https://drive.google.com/uc?export=view&id=14BFnzYpkK_IvFdOsh9_PjPzTLAZZxckz",
    link: "https://drive.google.com/file/d/1pCro-xMXf95iLZGywzzkB54u2KRxCatU/view?usp=drive_link",
  },
  {
    title: "Collection of Poems",
    description: "A few poems I have written over the years",
    image:
      "https://drive.google.com/uc?export=view&id=1fKejRxf--BBqBFvEKp6REb34mUNsm1Xz",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "poem",
    description: "this is a poem",
    image: "/temp",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
];

export default function Writing() {
  const writingDataArray = writingData.map((writing) => (
    <WritingCard
      title={writing.title}
      description={writing.description}
      image={writing.image}
      link={writing.link}
    />
  ));

  return (
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
                width: "80%",
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
  );
}
