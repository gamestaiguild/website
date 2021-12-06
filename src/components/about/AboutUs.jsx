import React, {  useState } from "react";
// import { Link } from "react-router-dom";
// import "../assets/styles/intro.scss";

import intro from "../../assets/intro.mp4";
import enjLogo from "../../assets/enj.png";
import equLogo from "../../assets/equ.png";
import gameStnLogo from "../../assets/game-station.png";
import oxBullLogo from "../../assets/oxbull.png";
import polyLogo from "../../assets/poly.png";
import poster from "../../assets/poster.png";
import OpenSeaIcon from "../../assets/openSeaIcon.png";
import CopperIcon from "../../assets/copperIcon.svg";


// import copper from "../assets/images/copper.png";
import playIcon from "../../assets/playIcon.png";

// import ScrollAnimation from "react-animate-on-scroll";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import styled from "styled-components";
import ReactPlayer from "react-player";
import BrandIconsCarousel from "../BrandIconsCarousel";
import { useMediaQuery } from "react-responsive";

const ScrollStyled = styled.div`
  .sticky {
    height: 50vh;
    position: relative;
    z-index: 1000;

    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;

      .home-content {
        position: absolute;
      }
      img {
        position: relative;
      }
    }
  }
`;

const AboutUs = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const handleVideoStart = () => {
    setIsPlaying(true);
  };

  const is767= useMediaQuery({ query: "(max-width: 767px)"});
  const is1060 = useMediaQuery({ query: "(max-width: 1060px)" });

 
  return (
    <ScrollStyled>
      <Controller>
        <div id="about">
          <div id="sec-about" className="skew-hero">
            <div className="inner">
              <div>
                <h1 className="community-title">
                  Gamesta has a large community with hundreds of players ready
                  to activate assets
                </h1>
                <a
                  href="https://forms.gle/3TG7dPkiHF9BjMQh7"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hover spec-btn-link"
                >
                  Get early access
                </a>
                <span className="offering">to our connected offerings</span>
              </div>
            </div>
           {!is1060 && <ul
              className="logo-list desktop-logo-list"
              style={{ zIndex: 200 }}
            >
              <li className="logo-list-item">
                <img src={enjLogo} alt="" />
              </li>
              <li className="logo-list-item">
                <img src={equLogo} alt="" />
              </li>
              <li className="logo-list-item">
                <img src={gameStnLogo} alt="" />
              </li>
              <li className="logo-list-item">
                <img src={oxBullLogo} alt="" />
              </li>
              <li className="logo-list-item">
                <img src={polyLogo} alt="" />
              </li>
              <li className="logo-list-item" style={{width: "174px"}}>
                <img src={OpenSeaIcon} alt="" />
              </li>
              <li className="logo-list-item">
                <img src={CopperIcon} alt="" />
              </li>
            </ul>}
          {is1060 &&  <div className="mobile-logo-list">
              <BrandIconsCarousel />
            </div>}
            <div>
              <div className="video-container">
                <ReactPlayer
                  playing={isPlaying}
                  light={!isPlaying ? poster : false}
                  url={intro}
                  controls={isPlaying}
                  width="836px"
                  height="auto"
                  onStart={handleVideoStart}
                />
                {!isPlaying && (
                  <div className="video-player" onClick={handlePlayClick}>
                    <Scene
                      triggerHook="onLeave"
                      duration={600}
                      // pin
                    >
                      {(progress) => (
                        <div className={is767 ? "" :"sticky"}>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  position: "absolute",
                                  top: "200px",
                                  opacity: 1,
                                  scale: 1,
                                },
                              }}
                              to={{
                                css: {
                                  position: "absolute",
                                  top: "400px",
                                  opacity: 0,
                                  scale: 2,
                                },
                              }}
                            >
                              <span id="play_button1">
                                <img src={playIcon} alt="playicon" />
                              </span>
                            </Tween>
                          </Timeline>
                        </div>
                      )}
                    </Scene>
                    <p>Watch Gamesta</p>
                    <p>Metaverse promo video</p>
                  </div>
                )}
              </div>
              <p>
                Based out of Bali, Indonesia, we are empowering under privileged
                players through the play 2 earn revolution
              </p>
            </div>
          </div>
        </div>
      </Controller>
    </ScrollStyled>
  );
};

export default AboutUs;
