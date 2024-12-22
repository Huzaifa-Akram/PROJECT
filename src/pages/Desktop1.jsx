import { Typography, Box } from "@mui/material";
import Header from "../components/Header";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-3">
      <Header logo="/logo@2x.png" showAuthButtons={false} login="Signup" />
      <main className="content">
        <section className="gallery">
          <div className="gallery-images">
            <div className="gallery-title">
              <h1 className="achievement-gallery">Achievement Gallery</h1>
            </div>
            <div className="gallery-image-row">
              <img
                className="image-25-icon"
                loading="lazy"
                alt=""
                src="/image-25@2x.png"
              />
            </div>
            <img
              className="image-25-icon"
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
            />
            <div className="gallery-image-row">
              <img
                className="image-25-icon"
                loading="lazy"
                alt=""
                src="/image-26@2x.png"
              />
            </div>
            <img
              className="image-25-icon"
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
            <div className="gallery-image-row">
              <img
                className="image-25-icon"
                loading="lazy"
                alt=""
                src="/image-20@2x.png"
              />
            </div>
            <img
              className="image-25-icon"
              loading="lazy"
              alt=""
              src="/image-24@2x.png"
            />
            <div className="gallery-image-single-a">
              <img
                className="image-25-icon"
                loading="lazy"
                alt=""
                src="/image-27@2x.png"
              />
            </div>
            <img
              className="image-25-icon"
              loading="lazy"
              alt=""
              src="/image-28@2x.png"
            />
            <div className="gallery-image-single-b">
              <img className="image-25-icon" alt="" src="/image-28-1@2x.png" />
            </div>
          </div>
        </section>
        <div className="social-icons1">
          <img
            className="logoswhatsapp-icon1"
            loading="lazy"
            alt=""
            src="/logoswhatsappicon.svg"
          />
          <img
            className="logosfacebook-icon1"
            loading="lazy"
            alt=""
            src="/logosfacebook.svg"
          />
          <img
            className="logosfacebook-icon1"
            loading="lazy"
            alt=""
            src="/skilliconsinstagram.svg"
          />
          <img
            className="logostiktok-icon1"
            loading="lazy"
            alt=""
            src="/logostiktokicon.svg"
          />
          <img
            className="logosfacebook-icon1"
            loading="lazy"
            alt=""
            src="/skilliconsgmaillight.svg"
          />
        </div>
      </main>
    </div>
  );
};

export default Desktop1;
