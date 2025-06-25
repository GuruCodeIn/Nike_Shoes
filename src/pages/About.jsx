/** @jsxImportSource @emotion/react */
import React from "react";
import Header from "../components/Header";

function About() {
  const pageStyles = {
    backgroundColor: "rgb(99, 79, 79",
    minHeight: "100vh",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
  };

  const contentStyles = {
    padding: "40px 20px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const titleStyles = {
    fontSize: "45px",
    fontWeight: "900",
    color: "#D9E0E5",
    marginBottom: "30px",
    textAlign: "center",
    "@media (max-width: 991px)": {
      fontSize: "35px",
    },
  };

  const sectionStyles = {
    marginBottom: "30px",
    color: "#D9E0E5",
  };

  const sectionTitleStyles = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#FFF",
  };

  const paragraphStyles = {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "15px",
  };

  const highlightStyles = {
    backgroundColor: "rgba(78, 82, 84, 0.5)",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "30px",
    textAlign: "center",
  };

  return (
    <div css={pageStyles}>
      <Header />
      <div css={contentStyles}>
        <h1 css={titleStyles}>ABOUT NIKE B-MAX</h1>

        <div css={sectionStyles}>
          <h2 css={sectionTitleStyles}>Our Story</h2>
          <p css={paragraphStyles}>
            Nike is the world's largest supplier of athletic shoes and apparel,
            and a major manufacturer of sports equipment. The company was
            founded on January 25, 1964, as "Blue Ribbon Sports" by Bill
            Bowerman and Phil Knight, and officially became Nike, Inc. on May
            30, 1971.
          </p>
          <p css={paragraphStyles}>
            The B-MAX line represents our commitment to innovation, comfort, and
            style. Each shoe is designed with cutting-edge technology to provide
            maximum performance for athletes and everyday wearers alike.
          </p>
        </div>

        <div css={sectionStyles}>
          <h2 css={sectionTitleStyles}>Our Mission</h2>
          <p css={paragraphStyles}>
            To bring inspiration and innovation to every athlete in the world.
            If you have a body, you are an athlete. We believe that everyone
            deserves access to quality athletic footwear that enhances
            performance and style.
          </p>
        </div>

        <div css={sectionStyles}>
          <h2 css={sectionTitleStyles}>Innovation & Technology</h2>
          <p css={paragraphStyles}>
            The B-MAX 90 features our latest cushioning technology, breathable
            materials, and durable construction. Every detail is engineered to
            provide superior comfort and performance, whether you're training,
            competing, or just going about your day.
          </p>
        </div>

        <div css={highlightStyles}>
          <p
            css={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}
          >
            "Just Do It"
          </p>
          <p css={{ fontSize: "14px", fontStyle: "italic" }}>
            More than just a slogan - it's a way of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
