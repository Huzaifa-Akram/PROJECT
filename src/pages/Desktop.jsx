import { useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <Header
        headerMarginRight="unset"
        headerWidth="90rem"
        logo="/logo@2x.png"
        headerFlexWrap="wrap"
        headerAlignContent="center"
        logoIconHeight="3.813rem"
        logoIconWidth="3.438rem"
        navLinksWidth="unset"
        navLinksJustifyContent="space-between"
        navLinksGap="unset"
        navLinksFlex="1"
        homeFlex="unset"
        homeWidth="5.644rem"
        homeDisplay="inline-block"
        aboutUsFlex="unset"
        aboutUsWidth="5.644rem"
        aboutUsDisplay="inline-block"
        coursesFlex="unset"
        coursesWidth="5.644rem"
        coursesDisplay="inline-block"
        testBookingFlex="unset"
        testBookingWidth="5.644rem"
        testBookingDisplay="inline-block"
        achievementsWidth="6rem"
        showAuthButtons={false}
        authButtonsJustifyContent="flex-end"
        login="Login"
      />
      <div className="frame-parent">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/group-3@2x.png"
        />
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/group-4@2x.png"
        />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/group-5@2x.png"
        />
        <div className="ellipse-div" />
        <div className="frame-child1" />
        <img className="icon" alt="" src="/icon.svg" />
        <div className="hero-content">
          <div className="social-icons">
            <img
              className="logoswhatsapp-icon"
              loading="lazy"
              alt=""
              src="/logoswhatsappicon.svg"
            />
            <img
              className="logosfacebook-icon"
              loading="lazy"
              alt=""
              src="/logosfacebook.svg"
            />
            <img
              className="logosfacebook-icon"
              loading="lazy"
              alt=""
              src="/skilliconsinstagram.svg"
            />
            <img
              className="logostiktok-icon"
              loading="lazy"
              alt=""
              src="/logostiktokicon.svg"
            />
            <img
              className="logosfacebook-icon"
              alt=""
              src="/skilliconsgmaillight.svg"
            />
          </div>
          <main className="content-wrapper-parent">
            <section className="content-wrapper">
              <div className="paragraph-wrapper-parent">
                <div className="paragraph-wrapper-parent">
                  <div className="paragraph-wrapper-parent">
                    <div className="paragraph-wrapper-parent">
                      <div className="word-container">
                        <div className="paragraph-wrapper-parent">
                          <div className="frame-group">
                            <div className="hello-this-is-parent">
                              <div className="hello-this-is">
                                Hello, This Is
                              </div>
                              <h1 className="the-bright-future">
                                The Bright Future IELTS Academy.
                              </h1>
                              <div className="your-success-is">
                                Your success is our top priority, and we are
                                committed to earning your trust every step of
                                the way. With dedication and integrity, we
                                ensure that your goals are our shared mission.
                                Together, we build a foundation for lasting
                                success.
                              </div>
                            </div>
                            <div className="call-to-action-buttons">
                              <Button
                                className="call-to-action-buttons-child"
                                disableElevation
                                variant="contained"
                                sx={{
                                  textTransform: "none",
                                  color: "#bf9654",
                                  fontSize: "20",
                                  background: "rgba(255, 255, 255, 0.8)",
                                  border: "rgba(191, 150, 84, 0.6) solid 1px",
                                  borderRadius: "12px",
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.8)",
                                  },
                                  width: 193,
                                  height: 54,
                                }}
                              >
                                Courses
                              </Button>
                              <Button
                                className="call-to-action-buttons-item"
                                disableElevation
                                variant="contained"
                                sx={{
                                  textTransform: "none",
                                  color: "#fff",
                                  fontSize: "20",
                                  background: "rgba(191, 150, 84, 0.8)",
                                  border: "#bf9654 solid 1px",
                                  borderRadius: "12px",
                                  "&:hover": {
                                    background: "rgba(191, 150, 84, 0.8)",
                                  },
                                  height: 54,
                                }}
                              >
                                Book Test Date
                              </Button>
                            </div>
                            <div className="stats">
                              <div className="stats-values-parent">
                                <b className="stats-values">+06</b>
                                <div className="years-of-experience">
                                  Years Of Experience
                                </div>
                              </div>
                              <div className="parent">
                                <b className="stats-values">+05</b>
                                <div className="services">Services</div>
                              </div>
                              <div className="parent">
                                <b className="stats-values">+3.4k</b>
                                <div className="services">Students</div>
                              </div>
                            </div>
                          </div>
                          <div className="trainer-info-wrapper">
                            <div className="trainer-info">
                              <div className="trainer-info1">
                                <div className="shahzaib-naveed-malik-parent">
                                  <h1 className="shahzaib-naveed-malik">
                                    Shahzaib Naveed Malik
                                  </h1>
                                  <h1 className="ielts-trainer">
                                    IELTS Trainer
                                  </h1>
                                </div>
                                <img
                                  className="carbonplay-outline-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/carbonplayoutline.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="word-container-inner"
                          data-scroll-to="frameContainer1"
                        >
                          <div className="frame-container">
                            <div className="image-parent">
                              <img
                                className="image-icon"
                                loading="lazy"
                                alt=""
                                src="/image@2x.png"
                              />
                              <div className="about-content">
                                <div className="about-us-parent">
                                  <h2 className="about-us">About Us</h2>
                                  <div className="our-ielts-institute-container">
                                    <span>{`Our IELTS institute officially opened its doors on `}</span>
                                    <span className="february-2-2019">
                                      February 2, 2019
                                    </span>
                                    <span>
                                      , marking the beginning of a dedicated
                                      journey to help students achieve their
                                      language goals.
                                    </span>
                                  </div>
                                </div>
                                <Button
                                  className="button"
                                  disableElevation
                                  variant="contained"
                                  sx={{
                                    textTransform: "none",
                                    color: "#fff",
                                    fontSize: "20",
                                    background: "#896e50",
                                    border: "#60482d solid 1px",
                                    borderRadius: "12px",
                                    "&:hover": { background: "#896e50" },
                                    width: 255,
                                    height: 41,
                                  }}
                                  onClick={onButtonClick}
                                >{`Achievements >`}</Button>
                              </div>
                            </div>
                            <div className="partnerships">
                              <div className="partnership-items">
                                <div className="empty-partnership">01</div>
                                <div className="in-2021-we">
                                  In 2021, we proudly partnered with the British
                                  Council, solidifying our commitment to
                                  excellence in IELTS preparation. Thanks to the
                                  trust of our students, we were recognized as
                                  the highest volume contributor in our region
                                  during 2022-2023, a testament to our
                                  dedication and success in helping students
                                  achieve their goals.
                                </div>
                              </div>
                              <div className="partnership-items1">
                                <div className="empty-partnership">02</div>
                                <div className="in-2021-we">
                                  In September 2019, we proudly became a partner
                                  of AEO Pakistan, expanding our offerings for
                                  students. In 2021, we further strengthened our
                                  commitment to quality education by partnering
                                  with Pearson PTE, providing comprehensive
                                  support for students pursuing their language
                                  proficiency goals.
                                </div>
                              </div>
                              <div className="partnership-items">
                                <div className="empty-partnership">03</div>
                                <div className="in-2021-we">
                                  In 2024, we are excited to announce our
                                  partnership with IDP, further enhancing our
                                  ability to support students in their IELTS
                                  journey. Additionally, we have teamed up with
                                  PSI, strengthening our commitment to providing
                                  top-tier exam preparation and assessment
                                  services for all our candidates.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="frame-div"
                        data-scroll-to="frameContainer"
                      >
                        <div className="online-courses-parent">
                          <h1 className="online-courses">Online Courses</h1>
                          <div className="we-offer-comprehensive">
                            We offer comprehensive online lessons to help you
                            master our courses at your own pace. Learn from
                            experienced instructors and enhance your skills with
                            our flexible, interactive online sessions.
                          </div>
                        </div>
                        <div className="course-cards">
                          <div className="course-card-items">
                            <img
                              className="image-icon1"
                              loading="lazy"
                              alt=""
                              src="/image-1@2x.png"
                            />
                            <div className="course-card-details">
                              <div className="course-card-titles-parent">
                                <div className="course-card-titles">
                                  <div className="ielts">IELTS</div>
                                  <div className="unlock-your-potential">
                                    Unlock your potential with our comprehensive
                                    IELTS online course, designed to help you
                                    achieve your desired band score.
                                  </div>
                                </div>
                                <div className="course-card-prices">
                                  <div className="buy-30k-pkr">Buy-30k pkr</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-card-items1">
                            <img
                              className="image-icon1"
                              loading="lazy"
                              alt=""
                              src="/image-2@2x.png"
                            />
                            <div className="course-card-details">
                              <div className="course-card-titles-parent">
                                <div className="course-card-titles">
                                  <div className="ielts">PTE</div>
                                  <div className="boost-your-pte">
                                    Boost your PTE score with our expert-led
                                    online course, tailored to help you succeed
                                    in every section.
                                  </div>
                                </div>
                                <div className="course-card-prices">
                                  <div className="buy-30k-pkr">Buy-30k pkr</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-card-items1">
                            <img
                              className="image-icon1"
                              loading="lazy"
                              alt=""
                              src="/image-3@2x.png"
                            />
                            <div className="course-card-details">
                              <div className="course-card-titles-parent">
                                <div className="course-card-titles">
                                  <div className="ielts">Language Courses</div>
                                  <div className="unlock-your-potential">
                                    Master a new language with our flexible,
                                    online courses designed for all levels and
                                    learning styles.
                                  </div>
                                </div>
                                <div className="course-card-prices">
                                  <div className="buy-30k-pkr">Buy-30k pkr</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-card-items1">
                            <img
                              className="image-icon1"
                              loading="lazy"
                              alt=""
                              src="/image-4@2x.png"
                            />
                            <div className="course-card-details">
                              <div className="course-card-titles-parent">
                                <div className="course-card-titles">
                                  <div className="ielts">Languagecert</div>
                                  <div className="unlock-your-potential">
                                    Explore great deals on LanguageCert courses
                                    online and boost your language skills with
                                    flexible, affordable learning options.
                                  </div>
                                </div>
                                <div className="course-card-prices">
                                  <div className="buy-30k-pkr">Buy-30k pkr</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-card-items1">
                            <img
                              className="image-icon1"
                              loading="lazy"
                              alt=""
                              src="/image-5@2x.png"
                            />
                            <div className="course-card-details">
                              <div className="course-card-titles-parent">
                                <div className="course-card-titles">
                                  <div className="ielts">Spoken Course</div>
                                  <div className="unlock-your-potential">
                                    Unlock your speaking potential with
                                    discounted online spoken courses, designed
                                    for real-world communication.
                                  </div>
                                </div>
                                <div className="course-card-prices">
                                  <div className="buy-30k-pkr">Buy-30k pkr</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-card-items1">
                            <img
                              className="image-icon1"
                              loading="lazy"
                              alt=""
                              src="/image-6@2x.png"
                            />
                            <div className="course-card-details">
                              <div className="course-card-titles-parent">
                                <div className="course-card-titles">
                                  <div className="ielts">Oxford</div>
                                  <div className="unlock-your-potential">
                                    Take advantage of online Oxford spoken
                                    courses at discounted rates, perfect for
                                    improving your fluency and confidence in
                                    speaking.
                                  </div>
                                </div>
                                <div className="course-card-prices">
                                  <div className="buy-30k-pkr">Buy-30k pkr</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="our-members-parent">
                      <h1 className="our-members">Our Members</h1>
                      <div className="member-profiles">
                        <div className="member-info">
                          <div className="course-card-titles">
                            <div className="shahzaib-naveed-malik-group">
                              <h1 className="shahzaib-naveed-malik1">
                                Shahzaib Naveed Malik
                              </h1>
                              <h3 className="ielts-trainer1">IELTS Trainer</h3>
                            </div>
                            <div className="member-bio">
                              <div className="ielts">Bio:</div>
                              <div className="i-am-a">
                                I am a certified IELTS trainer with a strong
                                background in teaching and training. Holding a
                                certification from the British Council, I have
                                been Training Students at The Bright Future
                                IELTS Academy in Lalamusa for the last 6 years
                                where I have consistently delivered high-quality
                                training to students. My dedication and
                                commitment to excellence have earned me the
                                recognition of Highest Volume Contributor in the
                                Region in 2024. With a passion for helping
                                students achieve their IELTS goals, I continue
                                to provide expert guidance and support.
                              </div>
                            </div>
                          </div>
                          <h3 className="experience-6-years">
                            Experience 6+ years
                          </h3>
                        </div>
                        <img
                          className="dc6-3875-4d31-b83e-f93cda7991d-icon"
                          loading="lazy"
                          alt=""
                          src="/57573dc638754d31b83ef93cda7991db-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="test-booking-container"
                    data-scroll-to="testBookingContainer"
                  >
                    <div className="test-booking-content">
                      <div className="test-booking-header">
                        <h1 className="book-your-test">Book Your Test Date</h1>
                        <div className="the-bright-future-container">
                          <span>
                            The Bright Future IELTS Academy is excited to offer
                            you the opportunity to conveniently book your IELTS
                            test date. Take the next step toward achieving your
                            academic or professional goals by selecting a date
                            that suits your schedule. Our academy ensures a
                            smooth booking process, helping you prepare
                            effectively and confidently for your IELTS exam.
                          </span>
                          <span className="span">{` `}</span>
                          <span className="dont-waitsecure-your">
                            Don’t wait—secure your test date today and start
                            your journey toward success!
                          </span>
                        </div>
                      </div>
                      <Button
                        className="button-danger"
                        endIcon={
                          <img width="16px" height="16px" src="/bookmark.svg" />
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "20",
                          background:
                            "linear-gradient(90deg, #896e50, rgba(129, 68, 0, 0.8))",
                          border: "#07233b solid 1px",
                          borderRadius: "8px",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #896e50, rgba(129, 68, 0, 0.8))",
                          },
                          width: 501,
                        }}
                      >
                        Book Test Date
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="review-details">
                  <div className="what-our-students-container">
                    <b className="what-our-students">{`What our Students Say About Us!   `}</b>
                    <span className="view-all">view all</span>
                  </div>
                  <div className="review-columns">
                    <div className="reviewer-info-columns">
                      <div className="reviewer-name-columns">
                        <h3 className="ali-hassan">Ali Hassan</h3>
                        <blockquote className="the-online-courses">
                          “The online courses at Bright Future Academy have been
                          a game-changer for me! The expert instructors are not
                          only knowledgeable but also incredibly supportive,
                          making learning both engaging and effective. The
                          flexible schedule allowed me to learn at my own pace,
                          ensuring I grasped every concept thoroughly. I’ve made
                          more progress in a shorter time than I ever expected,
                          and I highly recommend their courses to anyone looking
                          to excel!”
                        </blockquote>
                      </div>
                      <div className="review-rating-columns">
                        <div className="ratings">Ratings:</div>
                        <div className="rating-stars-columns">
                          <img
                            className="rating-stars-columns-child"
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-columns1">
                    <div className="reviewer-info-columns">
                      <div className="reviewer-name-columns">
                        <h3 className="ali-hassan">Ali Hassan</h3>
                        <blockquote className="the-online-courses">
                          “The online courses at Bright Future Academy have been
                          a game-changer for me! The expert instructors are not
                          only knowledgeable but also incredibly supportive,
                          making learning both engaging and effective. The
                          flexible schedule allowed me to learn at my own pace,
                          ensuring I grasped every concept thoroughly. I’ve made
                          more progress in a shorter time than I ever expected,
                          and I highly recommend their courses to anyone looking
                          to excel!”
                        </blockquote>
                      </div>
                      <div className="review-rating-columns">
                        <div className="ratings">Ratings:</div>
                        <div className="rating-stars-columns">
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-columns2">
                    <div className="reviewer-info-columns">
                      <div className="reviewer-name-columns">
                        <h3 className="ali-hassan">Ali Hassan</h3>
                        <blockquote className="the-online-courses">
                          “The online courses at Bright Future Academy have been
                          a game-changer for me! The expert instructors are not
                          only knowledgeable but also incredibly supportive,
                          making learning both engaging and effective. The
                          flexible schedule allowed me to learn at my own pace,
                          ensuring I grasped every concept thoroughly. I’ve made
                          more progress in a shorter time than I ever expected,
                          and I highly recommend their courses to anyone looking
                          to excel!”
                        </blockquote>
                      </div>
                      <div className="review-rating-columns">
                        <div className="ratings">Ratings:</div>
                        <div className="rating-stars-columns">
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-columns3">
                    <div className="reviewer-info-columns">
                      <div className="reviewer-name-columns">
                        <h3 className="ali-hassan">Ali Hassan</h3>
                        <blockquote className="the-online-courses">
                          “The online courses at Bright Future Academy have been
                          a game-changer for me! The expert instructors are not
                          only knowledgeable but also incredibly supportive,
                          making learning both engaging and effective. The
                          flexible schedule allowed me to learn at my own pace,
                          ensuring I grasped every concept thoroughly. I’ve made
                          more progress in a shorter time than I ever expected,
                          and I highly recommend their courses to anyone looking
                          to excel!”
                        </blockquote>
                      </div>
                      <div className="review-rating-columns">
                        <div className="ratings">Ratings:</div>
                        <div className="rating-stars-columns">
                          <img
                            className="rating-stars-columns-child"
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-columns4">
                    <div className="reviewer-info-columns">
                      <div className="reviewer-name-columns">
                        <h3 className="ali-hassan">Ali Hassan</h3>
                        <blockquote className="the-online-courses">
                          “The online courses at Bright Future Academy have been
                          a game-changer for me! The expert instructors are not
                          only knowledgeable but also incredibly supportive,
                          making learning both engaging and effective. The
                          flexible schedule allowed me to learn at my own pace,
                          ensuring I grasped every concept thoroughly. I’ve made
                          more progress in a shorter time than I ever expected,
                          and I highly recommend their courses to anyone looking
                          to excel!”
                        </blockquote>
                      </div>
                      <div className="review-rating-columns">
                        <div className="ratings">Ratings:</div>
                        <div className="rating-stars-columns">
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-columns5">
                    <div className="reviewer-info-columns">
                      <div className="reviewer-name-columns">
                        <h3 className="ali-hassan">Ali Hassan</h3>
                        <blockquote className="the-online-courses">
                          “The online courses at Bright Future Academy have been
                          a game-changer for me! The expert instructors are not
                          only knowledgeable but also incredibly supportive,
                          making learning both engaging and effective. The
                          flexible schedule allowed me to learn at my own pace,
                          ensuring I grasped every concept thoroughly. I’ve made
                          more progress in a shorter time than I ever expected,
                          and I highly recommend their courses to anyone looking
                          to excel!”
                        </blockquote>
                      </div>
                      <div className="review-rating-columns">
                        <div className="ratings">Ratings:</div>
                        <div className="rating-stars-columns">
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className="rating-stars-columns-child"
                            alt=""
                            src="/star-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-form">
                <h1 className="our-members">Write a Review and Rate It!</h1>
                <div className="write-review-input-container">
                  <div className="write-review-prompt-container">
                    <div className="tell-us-about">
                      Tell us about your own personal experience taking this
                      course. Was it a good match for you?
                    </div>
                    <div className="rating-input-container">
                      <div className="rating-stars-columns">
                        <img
                          className="star-input-icon"
                          loading="lazy"
                          alt=""
                          src="/star-1-6.svg"
                        />
                        <img
                          className="star-input-icon1"
                          loading="lazy"
                          alt=""
                          src="/star-2-6.svg"
                        />
                        <img
                          className="star-input-icon2"
                          loading="lazy"
                          alt=""
                          src="/star-3-6.svg"
                        />
                        <img
                          className="star-input-icon1"
                          loading="lazy"
                          alt=""
                          src="/star-2-6.svg"
                        />
                        <img
                          className="star-input-icon"
                          loading="lazy"
                          alt=""
                          src="/star-1-6.svg"
                        />
                      </div>
                      <button className="button1">
                        <div className="courses">Submit</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FrameComponent2 />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
