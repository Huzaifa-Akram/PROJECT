import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  className = "",
  headerMarginRight,
  headerWidth,
  logo,
  headerFlexWrap,
  headerAlignContent,
  logoIconHeight,
  logoIconWidth,
  navLinksWidth,
  navLinksJustifyContent,
  navLinksGap,
  navLinksFlex,
  homeFlex,
  homeWidth,
  homeDisplay,
  aboutUsFlex,
  aboutUsWidth,
  aboutUsDisplay,
  coursesFlex,
  coursesWidth,
  coursesDisplay,
  testBookingFlex,
  testBookingWidth,
  testBookingDisplay,
  achievementsWidth,
  showAuthButtons,
  authButtonsJustifyContent,
  login,
  frame5,
}) => {
  const headerStyle = useMemo(() => {
    return {
      marginRight: headerMarginRight,
      width: headerWidth,
      flexWrap: headerFlexWrap,
      alignContent: headerAlignContent,
    };
  }, [headerMarginRight, headerWidth, headerFlexWrap, headerAlignContent]);

  const logoIconStyle = useMemo(() => {
    return {
      height: logoIconHeight,
      width: logoIconWidth,
    };
  }, [logoIconHeight, logoIconWidth]);

  const navigationStyle = useMemo(() => {
    return {
      width: navLinksWidth,
      justifyContent: navLinksJustifyContent,
      gap: navLinksGap,
      flex: navLinksFlex,
    };
  }, [navLinksWidth, navLinksJustifyContent, navLinksGap, navLinksFlex]);

  const homeStyle = useMemo(() => {
    return {
      flex: homeFlex,
      width: homeWidth,
      display: homeDisplay,
    };
  }, [homeFlex, homeWidth, homeDisplay]);

  const aboutUsStyle = useMemo(() => {
    return {
      flex: aboutUsFlex,
      width: aboutUsWidth,
      display: aboutUsDisplay,
    };
  }, [aboutUsFlex, aboutUsWidth, aboutUsDisplay]);

  const coursesStyle = useMemo(() => {
    return {
      flex: coursesFlex,
      width: coursesWidth,
      display: coursesDisplay,
    };
  }, [coursesFlex, coursesWidth, coursesDisplay]);

  const testBookingStyle = useMemo(() => {
    return {
      flex: testBookingFlex,
      width: testBookingWidth,
      display: testBookingDisplay,
    };
  }, [testBookingFlex, testBookingWidth, testBookingDisplay]);

  const achievementsStyle = useMemo(() => {
    return {
      width: achievementsWidth,
    };
  }, [achievementsWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      justifyContent: authButtonsJustifyContent,
    };
  }, [authButtonsJustifyContent]);

  const navigate = useNavigate();

  const onAchievementsTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <header className={`header ${className}`} style={headerStyle}>
      <img
        className="logo-icon"
        loading="lazy"
        alt=""
        src={logo}
        style={logoIconStyle}
      />
      <nav className="nav-links" style={navigationStyle}>
        <a className="home" style={homeStyle}>
          Home
        </a>
        <a className="home" style={aboutUsStyle}>
          About Us
        </a>
        <a className="home" style={coursesStyle}>
          Courses
        </a>
        <a className="home" style={testBookingStyle}>
          Test Booking
        </a>
        <a
          className="achievements"
          onClick={onAchievementsTextClick}
          style={achievementsStyle}
        >
          Achievements
        </a>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  showAuthButtons: PropTypes.bool,
  login: PropTypes.string,
  frame5: PropTypes.string,

  /** Style props */
  headerMarginRight: PropTypes.string,
  headerWidth: PropTypes.string,
  headerFlexWrap: PropTypes.string,
  headerAlignContent: PropTypes.string,
  logoIconHeight: PropTypes.string,
  logoIconWidth: PropTypes.string,
  navLinksWidth: PropTypes.string,
  navLinksJustifyContent: PropTypes.string,
  navLinksGap: PropTypes.string,
  navLinksFlex: PropTypes.string,
  homeFlex: PropTypes.string,
  homeWidth: PropTypes.string,
  homeDisplay: PropTypes.string,
  aboutUsFlex: PropTypes.string,
  aboutUsWidth: PropTypes.string,
  aboutUsDisplay: PropTypes.string,
  coursesFlex: PropTypes.string,
  coursesWidth: PropTypes.string,
  coursesDisplay: PropTypes.string,
  testBookingFlex: PropTypes.string,
  testBookingWidth: PropTypes.string,
  testBookingDisplay: PropTypes.string,
  achievementsWidth: PropTypes.string,
  authButtonsJustifyContent: PropTypes.string,
};

export default Header;
