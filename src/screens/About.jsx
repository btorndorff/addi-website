import { React } from "react";
import "../styles/home.css";
import "../styles/photo.css";

export default function About() {
  return (
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
                alignItems: "center"
              }}
            >
              <p>
                Hello! I’m <strong>Adrienne Gilliam</strong>, a passionate and
                detail oriented baking professional with a Bachelor’s degree in
                English from the University of Virginia. Over the past five
                years, I’ve cultivated a strong foundation in writing and
                communication through the various projects you can view here and
                also through my work experience in the culinary industry. I
                thrive on community engagement and creative enrichment. With my
                English degree, I bring a blend of academic knowledge and
                practical expertise to my projects. As you explore my portfolio,
                you’ll find a collection of my passion projects that reflect my
                commitment to continuous learning, connections, and design. I’m
                excited to share my creative journey and I invite you to reach
                out to me!
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
  );
}
