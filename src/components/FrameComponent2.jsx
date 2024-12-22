import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <footer className={`footer-container-wrapper ${className}`}>
      <div className="footer-container">
        <img
          className="image-1-icon"
          loading="lazy"
          alt=""
          src="/image-11@2x.png"
        />
        <div className="footer-content">
          <div className="footer-navigation">
            <div className="company">Company</div>
            <div className="about">About</div>
            <div className="about">Courses</div>
            <div className="test-booking1">Test Booking</div>
            <div className="about">Home</div>
          </div>
          <div className="social-media-links">
            <div className="social-media">Social Media</div>
            <div className="about">Facebook</div>
            <div className="about">Tiktok</div>
            <div className="about">Instagram</div>
          </div>
          <div className="contact-info">
            <div className="company-address">Company Address</div>
            <div className="thebrightfutureieltsacademygm">
              thebrightfutureieltsacademy@gmail.com
            </div>
            <div className="about">{`0333-8505850 `}</div>
            <div className="about">
              <p className="dist-gujrat-punjab">{`Railway Road no.2 ,Lalamusa, `}</p>
              <p className="dist-gujrat-punjab">
                Dist. Gujrat, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
