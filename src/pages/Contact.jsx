/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const formStyles = {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const inputStyles = {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "2px solid rgba(78, 82, 84, 1)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    fontSize: "15px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
    "&:focus": {
      outline: "none",
      borderColor: "#D9E0E5",
    },
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: "120px",
    resize: "vertical",
  };

  const buttonStyles = {
    borderRadius: "14px",
    backgroundColor: "rgba(217, 217, 217, 1)",
    border: "none",
    padding: "12px 24px",
    fontSize: "15px",
    color: "#232526",
    fontWeight: "600",
    cursor: "pointer",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "rgba(200, 200, 200, 1)",
    },
  };

  const contactInfoStyles = {
    marginTop: "40px",
    textAlign: "center",
    color: "#D9E0E5",
  };

  const infoItemStyles = {
    marginBottom: "15px",
    fontSize: "15px",
    lineHeight: "1.4",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div css={pageStyles}>
      <Header />
      <div css={contentStyles}>
        <h1 css={titleStyles}>CONTACT US</h1>

        <form css={formStyles} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            css={inputStyles}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            css={inputStyles}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            css={textareaStyles}
            required
          />

          <button type="submit" css={buttonStyles}>
            SEND MESSAGE
          </button>
        </form>

        <div css={contactInfoStyles}>
          <div css={infoItemStyles}>
            <strong>Visit Our Store:</strong>
            <br />
            123 Nike Street, Sportstown, ST 12345
          </div>
          <div css={infoItemStyles}>
            <strong>Call Us:</strong>
            <br />
            (555) 123-4567
          </div>
          <div css={infoItemStyles}>
            <strong>Email:</strong>
            <br />
            info@nikebmax.com
          </div>
          <div css={infoItemStyles}>
            <strong>Store Hours:</strong>
            <br />
            Monday - Saturday: 9:00 AM - 8:00 PM
            <br />
            Sunday: 11:00 AM - 6:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
