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
        <hr style={{ width: "85%" }} />
        <p>{description}</p>
      </div>
    </div>
  );
};

const writingData = [
  {
    title: "Collection of Poems",
    description: "A few poems I have written over the years",
    image:
      "https://drive.google.com/uc?export=view&id=14BFnzYpkK_IvFdOsh9_PjPzTLAZZxckz",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "The Past We Take For Granted",
    description:
      "A writing about my experience with the Old Writings Lab (OWLS)",
    image:
      "https://drive.google.com/uc?export=view&id=14BFnzYpkK_IvFdOsh9_PjPzTLAZZxckz",
    link: "https://drive.google.com/file/d/1pCro-xMXf95iLZGywzzkB54u2KRxCatU/view?usp=drive_link",
  },
  {
    title: "poem",
    description: "this is a poem",
    image: "/temp",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "poem2",
    description: "this is a poem2",
    image: "/temp",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "poem",
    description: "this is a poem",
    image: "/temp",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "poem2",
    description: "this is a poem2",
    image: "/temp",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "poem",
    description: "this is a poem",
    image: "/temp",
    link: "https://drive.google.com/file/d/1NMRVr7sYM1hI_l8Tjs8RZIkjjBDRD47B/view?usp=sharing",
  },
  {
    title: "poem2",
    description: "this is a poem2",
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
              height: "100vh",
              alignItems: "center",
              color: "black",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "110px",
              }}
            >
              {writingDataArray.map((item, index) => (
                <div
                  key={index}
                  style={{
                    flex: "0 0 calc(33.333% - 50px)", // Adjust the percentage as needed
                    margin: "25px", // Add some margin for spacing
                    textAlign: "center",
                    marginBottom: "50px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
