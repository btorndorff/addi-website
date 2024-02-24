import { React } from "react";
import "../styles/home.css";
import "../styles/photo.css";

export default function About({ isMobileView }) {
  return (
    <>
      {isMobileView ? (
        <div className="absolute w-full min-h-full flex flex-col justify-center items-center text-white z-0 overflow-scroll">
          <div className="content">
            <div
              className="display-content"
              style={{
                height: "100vh",
                alignItems: "flex-start",
                color: "black",
              }}
            >
              <div className="flex flex-col justify-center items-center p-4 mt-[20%]">
                <img src="/assets/about.jpg" className="mb-2" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    padding: "5px",
                  }}
                >
                  <p>
                    Hello! I’m <strong>Adrienne Gilliam</strong>, a passionate
                    and detail oriented baking professional with a Bachelor’s
                    degree in English from the University of Virginia. Over the
                    past five years, I’ve cultivated a strong foundation in
                    writing and communication through the various projects you
                    can view here and also through my work experience in the
                    culinary industry. I thrive on community engagement and
                    creative enrichment. With my English degree, I bring a blend
                    of academic knowledge and practical expertise to my
                    projects. As you explore my portfolio, you’ll find a
                    collection of my passion projects that reflect my commitment
                    to continuous learning, connections, and design. I’m excited
                    to share my creative journey and I invite you to reach out
                    to me!
                  </p>
                  <p>
                    💌{" "}
                    <a
                      href="mailto:oneinagilliam@gmail.com"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <strong>{"oneinagilliam@gmail.com"}</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home">
          <div className="content">
            <div
              className="display-content"
              style={{
                height: "100vh",
                alignItems: "flex-start",
                color: "black",
              }}
            >
              <div style={{ display: "flex", gap: "20px", margin: "10%" }}>
                <img
                  src="/assets/about.jpg"
                  style={{ width: "40%", height: "auto" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Hello! I’m <strong>Adrienne Gilliam</strong>, a passionate
                    and detail oriented baking professional with a Bachelor’s
                    degree in English from the University of Virginia. Over the
                    past five years, I’ve cultivated a strong foundation in
                    writing and communication through the various projects you
                    can view here and also through my work experience in the
                    culinary industry. I thrive on community engagement and
                    creative enrichment. With my English degree, I bring a blend
                    of academic knowledge and practical expertise to my
                    projects. As you explore my portfolio, you’ll find a
                    collection of my passion projects that reflect my commitment
                    to continuous learning, connections, and design. I’m excited
                    to share my creative journey and I invite you to reach out
                    to me!
                  </p>
                  <p>
                    💌{" "}
                    <a
                      href="mailto:oneinagilliam@gmail.com"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <strong>{"oneinagilliam@gmail.com"}</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
