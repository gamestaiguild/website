import "../../styles/global.scss";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import laptop from "../../assets/laptop.png";
import laptopIcon from "../../assets/lcd-with-icon.png";
import laptopNew from "../../assets/laptop-1.png";
import herodbg from "../../assets/animation/rectangle28.png";
import heroimg22 from "../../assets/animation/image22.png";
import heroimg24 from "../../assets/animation/image24.png";
import heroimg25 from "../../assets/animation/image25.png";
import heroimg28 from "../../assets/animation/image28.png";
import heroimg31 from "../../assets/animation/image31.png";
import heroimg34 from "../../assets/animation/image34.png";
import heroimg39 from "../../assets/animation/image39.png";
import heroimg41 from "../../assets/animation/image41.png";

import gameStnIcon from "../../assets/gamestn.png";
import novLogo from "../../assets/nov.png";
import vmgLogo from "../../assets/vmg.png";

import critIcon from "../../assets/crit.png";
import ghafIcon from "../../assets/ghaf.png";
import legionIcon from "../../assets/legion.png";
import lpiIcon from "../../assets/lpi.png";
import bluewheelIcon from "../../assets/bluewheel.png";
import bcaIcon from "../../assets/bca.png";
import brotherIcon from "../../assets/brother.png";

import samProfile from "../../assets/sam.png";
import sunProfile from "../../assets/sun.png";
import maxProfile from "../../assets/max.png";
import willyProfile from "../../assets/willy.png";

import spencerProfile from "../../assets/spencer_taring.png";
import davidProfile from "../../assets/david.png";
import jodyProfile from "../../assets/jody.jpg";
import tomasProfile from "../../assets/tomas.png";
import belloProfile from "../../assets/bello.png";

import downArrowIcon from "../../assets/downArrow.png";
import chartIcon from "../../assets/chart.png";
import peopleIcon from "../../assets/people.png";
import stockIcon from "../../assets/stock.png";
import nftSmallIcon from "../../assets/nftSmall.png";
import tokenSmallIcon from "../../assets/tokenSmall.png";


import equLogo from "../../assets/equ.png";
import oxBullLogo from "../../assets/oxbull.png";
import dopeWarzIcon from "../../assets/dopeWarz.png";
import Carousel from "../../components/Carousel";
import RoadmapCarousel from "../../components/RoadmapCarousel";
import watermark from "../../assets/watermark.png";



import AnnouncementModel from "../../components/modals/AnnouncementModal";
import Loader from "../../components/loader/Loader";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import PlayToEarn from "../../components/playtoearn/PlayToEarn";
import Market from "../../components/market/Market";
import GameBanner from "../../components/gamebanner/GameBanner";
import BlackGamexCard from "../../components/blackGamexCard";
import Blog from "../../components/blog/Blog";
import Incubators from "../../components/incubator/Incubator";
import EcoSystem from "../../components/ecosystem";
import AboutUs from "../../components/about/AboutUs";
import Dao from "../../components/dao/Dao";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [show, setShow] = useState(false);
  const [ShowAccouncement, setShowAccouncement] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [startAnimation, setstartAnimation] = useState(false)
  const [AnimationFinished, setAnimationFinished] = useState(false)

  
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".card", {
    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.1 }),
  });

  gsap.utils.toArray(".fade").forEach(function (fade) {
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 800px)": function () {
        gsap.to(fade, {
          opacity: 1,
          scrollTrigger: {
            trigger: fade,
            end: "0% 50%",
            scrub: true,
            markers: false,
            pin: true,
            pinSpacing: false,
          },
        });
        gsap.fromTo(
          fade,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            scrollTrigger: {
              trigger: fade,
              start: "50% 0%",
              // start: "top top",
              scrub: true,
              markers: false,
              pin: true,
              pinSpacing: false,
            },
          }
        );
      },

      // mobile
      "(max-width: 799px)": function () {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore.

        return function () {
          gsap.kill();
        };
      },

      // all
      all: function () {
        // ScrollTriggers created here aren't associated with a particular media query,
        // so they persist.
      },
    });
  });

  useEffect(() => {
    if(!isLoading){
      // 2pm UTC 15th Dec
      var target_date = new Date('2021-12-16T14:00:00Z')

      // December 15, 2021 14:00:00 
      //  + 1000 * 3600 * 48; // set the countdown date
      var days, hours, minutes, seconds; // variables for time units
  
      var countdown = document.getElementById("tiles"); // get tag element
  
      getCountdown();
  
      setInterval(function () {
        getCountdown();
      }, 1000);
  
      function getCountdown() {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
  
        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;
  
        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;
  
        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));
  
        // format countdown string + set tag value
        countdown.innerHTML =
          "<span>" +
          days +
          "</span><span>" +
          hours +
          "</span><span>" +
          minutes +
          "</span><span>" +
          seconds +
          "</span>";
      }
  
      function pad(n) {
        return (n < 10 ? "0" : "") + n;
      }
    }
  }, [isLoading]);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > 0) {
        setstartAnimation(true)
        setTimeout(() => {
          setAnimationFinished(true)
        }, 2000);
      }
    if (winScroll > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);


  const handleModelClose = () => {
    setShowAccouncement(false)
  }

  // useEffect(() => {
  //   if (window.sessionStorage.getItem('user')) {
  //     return
  //   } else {
  //     window.sessionStorage.setItem('user', true)
  //     setTimeout(() => {
  //       setShowAccouncement(true)
  //     }, 500);
  //   }
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <>
    {
      isLoading ?  <Loader /> :
    
    <div className={startAnimation ? AnimationFinished ? 'move' : 'move crash-height' : 'default'}> 
       <Header />
      <div className="hero-wrapper">
      <div className={ AnimationFinished ? show ?  "hero-section hide" : "hero-section" : "hero-section"}>
        <img src={herodbg} className="rectangle28" alt="" />
        <img src={heroimg22} className="image22" alt="" />
        <img src={heroimg24} className="image24" alt="" />
        <img src={heroimg25} className="image25" alt="" />
        <img src={heroimg28} className="image28" alt="" />
        <img src={heroimg31} className="image31" alt="" />
        <img src={heroimg34} className="image34" alt="" />
        <img src={heroimg39} className="image39" alt="" />
        <img src={heroimg41} className="image41" alt="" />
    </div>
        <section className="header-middle-section">
          <div className="content">
            <h1 className="title">A.I. Powered Guild for NFT Gaming</h1>
            <p className="des">
              Gamesta enabling investors to connect and empower thousands of
              under privileged players throughout the World
            </p>
            <div className="sub-des header-btn-wrapper-top">
              Join our community
              <ul className="inline-list header-btn-wrapper">
                <a href="https://discord.gg/gamestaguild" target="_blank" rel="noreferrer" className="inline-list-item">
                <button className="btn">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.096 2.55679C18.1568 0.998386 15.0904 0.734386 14.9608 0.723186C14.756 0.705586 14.5616 0.821586 14.4776 1.00879C14.4744 1.01519 14.3032 1.51199 14.1376 1.99119C16.3912 2.38559 17.9224 3.26079 18.004 3.30879C18.3864 3.53119 18.5144 4.02159 18.2912 4.40319C18.1432 4.65759 17.8752 4.79999 17.6 4.79999C17.4632 4.79999 17.3256 4.76559 17.1992 4.69199C17.1768 4.67839 14.9304 3.39999 12.0016 3.39999C9.07205 3.39999 6.82485 4.67919 6.80245 4.69199C6.42085 4.91359 5.93125 4.78319 5.70965 4.40079C5.48805 4.01999 5.61685 3.53119 5.99765 3.30879C6.07925 3.26079 7.61605 2.38239 9.87605 1.98879C9.70165 1.50399 9.52565 1.01519 9.52245 1.00879C9.43845 0.820786 9.24405 0.702386 9.03925 0.723186C8.90965 0.733586 5.84325 0.997586 3.87845 2.57759C2.85125 3.52639 0.800049 9.07359 0.800049 13.8696C0.800049 13.9544 0.821649 14.0368 0.864049 14.1104C2.28085 16.5984 6.14325 17.2496 7.02325 17.2776C7.02885 17.2784 7.03365 17.2784 7.03845 17.2784C7.19365 17.2784 7.34005 17.204 7.43205 17.0784L8.38405 15.7888C6.29605 15.2856 5.19205 14.4944 5.12565 14.4456C4.77045 14.184 4.69365 13.6832 4.95525 13.3272C5.21605 12.9728 5.71525 12.8944 6.07045 13.1544C6.10005 13.1736 8.13765 14.6 12 14.6C15.8776 14.6 17.9096 13.168 17.9296 13.1536C18.2848 12.896 18.7856 12.9736 19.0456 13.3304C19.3048 13.6856 19.2296 14.1832 18.876 14.444C18.8096 14.4928 17.7112 15.2824 15.628 15.7856L16.568 17.0776C16.66 17.204 16.8064 17.2776 16.9616 17.2776C16.9672 17.2776 16.972 17.2776 16.9768 17.2768C17.8576 17.2488 21.72 16.5976 23.136 14.1096C23.1784 14.036 23.2 13.9536 23.2 13.8688C23.2 9.07359 21.1488 3.52639 20.096 2.55679ZM8.80005 12.2C7.91605 12.2 7.20005 11.3048 7.20005 10.2C7.20005 9.09519 7.91605 8.19999 8.80005 8.19999C9.68405 8.19999 10.4 9.09519 10.4 10.2C10.4 11.3048 9.68405 12.2 8.80005 12.2ZM15.2 12.2C14.316 12.2 13.6 11.3048 13.6 10.2C13.6 9.09519 14.316 8.19999 15.2 8.19999C16.084 8.19999 16.8 9.09519 16.8 10.2C16.8 11.3048 16.084 12.2 15.2 12.2Z"
                        fill="#5869EA"
                      />
                    </svg>
                    Discord
                 </button>
                </a>
                <a href="https://twitter.com/gamestaguild" target="_blank" rel="noreferrer" className="inline-list-item">
                  <button className="btn twitter-color">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3999 2.54963C20.6343 2.88963 19.8119 3.11843 18.9487 3.22163C19.8303 2.69363 20.5063 1.85763 20.8247 0.860828C20.0007 1.34963 19.0871 1.70483 18.1143 1.89683C17.3359 1.06723 16.2271 0.548828 14.9999 0.548828C12.6431 0.548828 10.7327 2.46003 10.7327 4.81603C10.7327 5.15043 10.7711 5.47683 10.8431 5.78803C7.29672 5.61043 4.15272 3.91123 2.04712 1.32883C1.68072 1.95923 1.47032 2.69203 1.47032 3.47523C1.47032 4.95523 2.22312 6.26163 3.36792 7.02643C2.66872 7.00403 2.01032 6.81203 1.43512 6.49283C1.43512 6.51123 1.43512 6.52803 1.43512 6.54643C1.43512 8.61443 2.90552 10.3392 4.85832 10.7304C4.50072 10.828 4.12312 10.88 3.73352 10.88C3.45912 10.88 3.19112 10.8528 2.93112 10.804C3.47432 12.4992 5.05032 13.7336 6.91752 13.768C5.45752 14.9128 3.61752 15.5952 1.61752 15.5952C1.27352 15.5952 0.933521 15.5752 0.599121 15.5352C2.48792 16.7456 4.73032 17.452 7.14072 17.452C14.9903 17.452 19.2815 10.9496 19.2815 5.31043C19.2815 5.12563 19.2775 4.94163 19.2695 4.75843C20.1039 4.15603 20.8279 3.40483 21.3999 2.54963Z"
                        fill="#4AA0EB"
                      />
                    </svg>
                    Twitter
                  </button>
                </a>

                <a href="https://t.me/gamestaguild" target="_blank" rel="noreferrer" className="inline-list-item">
                  <button className="btn telegram-color">
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1458 1.14492C20.7858 0.839645 20.2204 0.795965 19.6358 1.03068H19.6348C19.0199 1.2774 2.22953 8.47932 1.54601 8.77356C1.42169 8.81676 0.335926 9.22188 0.447766 10.1243C0.547606 10.9379 1.42025 11.2748 1.52681 11.3137L5.79544 12.7753C6.07865 13.718 7.12265 17.1961 7.35353 17.9392C7.49753 18.4024 7.73224 19.011 8.14361 19.1363C8.50457 19.2755 8.86361 19.1483 9.09593 18.9659L11.7057 16.5452L15.9186 19.8308L16.019 19.8908C16.305 20.0176 16.5791 20.0809 16.8407 20.0809C17.0428 20.0809 17.2367 20.043 17.422 19.9672C18.0532 19.708 18.3057 19.1065 18.3321 19.0384L21.479 2.6814C21.671 1.8078 21.4041 1.36332 21.1458 1.14492ZM9.56009 13.36L8.12009 17.2L6.68009 12.4L17.7201 4.23996L9.56009 13.36Z"
                        fill="#1A8BD8"
                      />
                    </svg>
                    Telegram
                  </button>
                </a>
              </ul>
            </div>
            <div className="countdown-des">
            COPPER LAUNCH AUCTION Countdown
              <div id="countdown">
                <div id="tiles"></div>
              </div>
              <ul className="inline-list">
                <li className="countdown-list-item">Days</li>
                <li className="countdown-list-item">Hours</li>
                <li className="countdown-list-item">Min</li>
                <li className="countdown-list-item">Sec</li>
              </ul>
            </div>
            <div className="get-ready">
              <p>Get Ready to Unleash GameFi Together</p>
            </div>
          </div>
          <div className="image-wrapper">          
            <img src={AnimationFinished ? show ? laptopNew : laptop : laptop} alt="" className="desktop-image"/>
            <img src={laptopIcon} alt="" className="mobile-image" />
          </div>
        </section>
        <div className="water-mark">
          <p>FLP using Copperlaunch</p>
          <img src={watermark} alt="water-mark" />
          <a href="https://blog.gamesta.ai/gamesta-fair-launch-auction-31ffcc1bd5d3" target="_blank" rel="noreferrer">More info</a>
        </div>
      </div>
      {/* //image */}

      <AboutUs />

      {/* <div id="about">
        <div id="sec-about" className="skew-hero">
          <div className="inner">
            <div>
              <h1 className="community-title">
                Gamesta has a large community with hundreds of players ready to
                activate assets
              </h1>
              <a href="https://forms.gle/3TG7dPkiHF9BjMQh7" target="_blank" data-aos="fade-up" rel="noreferrer" className="btn-hover spec-btn-link">Get early access </a>
              <span className="offering">to our connected offerings</span>
            </div>
          </div>
          <ul className="logo-list desktop-logo-list" data-aos="flip-left" style={{ zIndex: 200 }}>
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
          </ul>
          <div className="mobile-logo-list">
            <BrandIconsCarousel />
          </div>
          <div>
            <div className="video-container" data-aos="zoom-in-up">
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
                <div className="video-player" onClick={handlePlayClick} data-aos="zoom-in-up">
                  <span id="play_button1">
                    <img src={playIcon} alt="playicon" />
                  </span>
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
      </div> */}
    
      <div id="play2earn" className="other-wrapper">
        <PlayToEarn />
        <Market />
       <GameBanner />
     
        <div
          className="light-gradient"
          style={{ width: "100%", height: "100%" }}
        >
          <div id="business-modal" className="basic-container">
            <div className="basic-wrapper">
              <div className="basic-content" data-aos="fade-down">
                <h1 className="title">Business Model & Activities</h1>
                <p className="des">
                  The general business activities of the Guild will fall under
                  the following categories.
                </p>
              </div>
              <div className="chart-inner-wrapper" data-aos="fade-up">
                <div className="icon-list">
                  <details data-aos="zoom-in-down">
                    <summary>
                      <div>
                        <span>
                          <img src={nftSmallIcon} alt="" />
                        </span>
                        <h3>
                          <strong>Acquisition of in-game assets (NFTs)</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="zoom-in-down">
                    <summary>
                      <div>
                        <span>
                          <img src={chartIcon} alt="" />
                        </span>
                        <h3>
                          <strong>
                            Active Market Research for new games coming to
                            market
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="zoom-in-down">
                    <summary>
                      <div>
                        <span>
                          <img src={peopleIcon} alt="" />
                        </span>

                        <h3>
                          <strong>
                            Building a global community of players, focused
                            mainly on the underprivileged communities of
                            Indonesia, Vietnam, Philippines, etc.
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="zoom-in-down">
                    <summary>
                      <div>
                        <span>
                          <img src={tokenSmallIcon} alt="" />
                        </span>
                        <h3>
                          <strong>
                            Producing revenue from activation of NFTs and their
                            utilities
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="zoom-in-down">
                    <summary>
                      <div>
                        <span>
                          <img src={stockIcon} alt="" />
                        </span>
                        <h3>
                          <strong>Staking services</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="zoom-in-down">
                    <summary>
                      <div>
                        <span>
                          <img src={downArrowIcon} alt="" />
                        </span>

                        <h3>
                          <strong>
                            VC investments into exciting projects being added to
                            our community
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-hero">
            <div className="inner">
              <div>
                <h1 data-aos="zoom-in-right">
                  Value
                  <br />
                  <span style={{ marginLeft: `80px` }}>Proposition</span>
                </h1>
                <span className="carousel-hero-border"></span>
                <p data-aos="zoom-in-right">
                  The guild effectively connects investors and players together,
                  enabling both parties to profit from the exploding GameFi
                  market.
                </p>
                <strong data-aos="zoom-in-right">
                  Gamesta brings value through its experience in the industry.
                  Specialists in crypto and more prudently GameFi, VMG’s core
                  team are looking forward to building one of the most
                  successful guilds ever, one that gives high yields to
                  investors but at the same time empowers players from all over
                  the globe.
                </strong>
              </div>
            </div>

            {/* //logo */}
          </div>
          <Carousel />

          <Dao />
          {/* <div id="dao" className="dao-hero dad-sectoin">
            <img style={{ margin: "auto" }} src={daoBackground} alt="" />
            <div className="dao-container">
              <div className="dao-wrapper">
                <div className="dao-content" data-aos="zoom-out">
                  <p className="des">
                    We are currently closing the allocations in the seed round
                    before starting our private rounds allocations, and are
                    looking to raise <span> $8,000,000 USD</span> to assist in
                    building a world class asset base and efficient smart
                    contract system.
                  </p>
                  <p className="sub-des">
                    This will enable us to create a DAO which will make key
                    decisions, operate the treasury, and direct the Guild in a
                    fair and equitable manner.
                  </p>
                </div>
                <div className="dao-inner-wrapper dad-dao-inner-wrapper">
                  <img src={daoChart} alt="" data-aos="zoom-out"/>
                </div>
              </div>
            </div>
          </div>

           //props 

          <div className="dao-hero dao-hero-proposals">
            <div className="dao-container">
              <div className="dao-wrapper">
                <div className="dao-content voting" >
                  <h1 className="title" data-aos="zoom-out-up">
                    Proposals and voting will include, but not be limited to:
                  </h1>
                  <div className="prop-icon-list" >
                    <div className="card-grid">
                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span data-aos="zoom-out-right">
                              <img src={Technology} alt="" data-aos="zoom-out-down"/>
                            </span>
                            <h4 className="prop-title" data-aos="zoom-out-right">Technology</h4>
                          </div>
                        </div>
                      </article>

                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span>
                              <img src={tokenIcon} alt="" data-aos="zoom-out-right"/>
                            </span>
                            <h4 className="prop-title" data-aos="zoom-out-right">Token distribution</h4>
                          </div>
                        </div>
                      </article>
                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span>
                              <img src={Empowerment} alt="" data-aos="zoom-out-right"/>
                            </span>
                            <h4 className="prop-title" data-aos="zoom-out-right">Products and projects</h4>
                          </div>
                        </div>
                      </article>

                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span data-aos="zoom-out-right">
                              <img src={GovernanceStructure} alt="" />
                            </span>
                            <h4 className="prop-title" data-aos="zoom-out-right">Governance structure</h4>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <p style={{ marginRight: "auto" }} data-aos="zoom-in-up">
                    Whilst the community is maturing, and until the launch of
                    The DAO, we will run financials in a centralised manner,
                    reporting asset acquisitions, gaming profits & yields via a
                    weekly report that will be distributed on the blockchain.
                  </p>
                </div>
                <div className="dao-inner-wrapper">
                  <img src={daoChart}></img> 
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div id="eco-system" className="eco-container">
          <div className="carousel-hero">
            <div className="inner">
              <div>
                <h1 data-aos="fade-down">
                  Ecosystem
                  <br />
                  <span style={{ marginLeft: `312px` }}>& Treasury</span>
                </h1>
                <div className="players-winning">
                  <p className="players-winning-text" data-aos="fade-up">
                    All fees collected from players will be collected in this
                    treasury, and it would also pay out players' winnings.
                  </p>
                </div>
                <p className="ecosystem-revolves" data-aos="fade-left">
                  The Gamesta ecosystem revolves around the Treasury, which is
                  an open and transparent funds system, bankrolling all games
                  thereon.
                </p>
              </div>
            </div>
          </div>
          <div className="eco-wrapper">
            <div className="eco-inner-wrapper">
              <div className="grid">
                <div className="grid__img">
                  <img src={gradientCircle} alt="" data-aos="fade-down"/>
                </div>
                <div className="grid__card" data-aos="flip-left">
                  <h2 id="title1" aria-hidden="true" >
                    Token will be used
                  </h2>
                  <h2 id="title1" aria-hidden="true" style={{ marginLeft: 90 }}>
                    to transact value within
                  </h2>
                  <h2
                    id="title1"
                    aria-hidden="true"
                    style={{ marginLeft: 200 }}
                  >
                    the Gamesta Ecosystem
                  </h2>
                </div>

                <div className="grid__card3">
                  <div className="eco-content">
                    <h1 className="title" data-aos="fade-up-left">
                      We are creating a total <br />
                      of &nbsp;
                      <strong>1,000,000,000 $GSG </strong>
                      tokens
                    </h1>
                    <p className="des" data-aos="fade-up-left">
                      which will act as the utility token within Gamesta’s
                      network. The token will enable investors to take advantage
                      of the opportunities provided by the play 2 earn
                      ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eco-bottom-hero">
            <div className="inner">
              <div>
                <p>
                  Our token will be based on Polygon (MATIC) to leverage the ETH
                  network whilst keeping the gas & transaction fees to a
                  minimum.
                </p>
                <h1>
                  After completion of the private & public sale, Gamesta will
                  allocate capital into in-game assets and begin development
                  work on the infrastructure of the ecosystem
                  <strong>
                    $GSG will enable holders to be rewarded, players to be
                    incentivized, and the treasury funded, via our unique smart
                    contract system of buying back the token with yields
                    generated.
                  </strong>
                  <a href="https://bit.ly/3jEK7yD" target="_blank" rel="noreferrer" className="btn-hover2 spec-btn-link">
                    Explore More in our Whitepaper
                  </a>
                </h1>
              </div>
            </div>
          </div>

          <div className="utility-container">
            <div className="utility-wrapper">
              <div className="utility-content">
                <h1 className="title" data-aos="fade-right">Utility</h1>

                <div className="icon-list2">
                  <details data-aos="fade-right">
                    <summary>
                      <div>
                        <span>
                          <img src={DistributingProfits} alt="" />
                        </span>
                        <h3>
                          <strong>Distributing profits to investors</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-right">
                    <summary>
                      <div>
                        <span>
                          <img src={Staking} alt="" />
                        </span>
                        <h3>
                          <strong>Staking</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-right">
                    <summary>
                      <div>
                        <span>
                          <img src={Governance} alt="" />
                        </span>

                        <h3>
                          <strong>
                            Governance + key decisions voted on in the DAO
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-right">
                    <summary>
                      <div>
                        <span>
                          <img src={Further} alt="" />
                        </span>
                        <h3>
                          <strong>
                            Further fund raising for asset acquisition if deemed
                            necessary
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-right">
                    <summary>
                      <div>
                        <span>
                          <img src={Community} alt="" />
                        </span>
                        <h3>
                          <strong>Community activation and incentives</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                </div>
              </div>
              <div className="chart-inner-wrapper" style={{ marginTop: `5rem` }}>
                <div className="utility-content">
                  <h1 className="title" data-aos="fade-left">Derived Value</h1>

                  <div className="icon-list2">
                    <details data-aos="fade-left">
                      <summary>
                        <div>
                          <span>
                            <img src={Yield} alt="" />
                          </span>
                          <h3>
                            <strong>
                              Yield gained from assets acquired by Treasury
                            </strong>
                          </h3>
                        </div>
                      </summary>
                    </details>

                    <details data-aos="fade-left">
                      <summary>
                        <div>
                          <span>
                            <img src={ProfitsProduced} alt="" />
                          </span>
                          <h3>
                            <strong>
                              Profits produced from active play of virtual
                              assets
                            </strong>
                          </h3>
                        </div>
                      </summary>
                    </details>

                    <details data-aos="fade-left">
                      <summary>
                        <div>
                          <span>
                            <img src={Persentage} alt="" />
                          </span>

                          <h3>
                            <strong>% of APY generated from farming</strong>
                          </h3>
                        </div>
                      </summary>
                    </details>

                    <details data-aos="fade-left">
                      <summary>
                        <div>
                          <span>
                            <img src={Rewards} alt="" />
                          </span>
                          <h3>
                            <strong>
                              Rewards generated from subscription fees
                            </strong>
                          </h3>
                        </div>
                      </summary>
                    </details>

                    <details data-aos="fade-left">
                      <summary>
                        <div>
                          <span>
                            <img src={Sponsorships} alt="" />
                          </span>
                          <h3>
                            <strong>Rewards generated from sponsorships</strong>
                          </h3>
                        </div>
                      </summary>
                    </details>

                    <p className="sub-des sm-fonts" data-aos="fade-left">
                      Additional value to be added in future…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <EcoSystem />
         <BlackGamexCard />
        {/* //token */}
        <div className="token-container">
          <div className="token-content">
            <h1 className="title" style={{ lineHeight: 1.5 }} data-aos="zoom-in-left">
              Tokenomics
            </h1>
            <p className="des" data-aos="zoom-in-right">
              There will be a max supply of &nbsp;
              <span className="des-highlight">1,000,000,000 GSG </span>
              tokens, with <span className="green">14%</span> of them being sold
              in a private & public sale to raise the initial capital to invest
              into in-game assets and build out the platform.
            </p>

            <div style={{ marginTop: 20 }} data-aos="zoom-out-up">
              <strong className="sub-des" style={{ display: "flex" }}>
                <p>
                  Need more info about Token Distribution, Token Sale, Use of
                  Funds?
                </p>
                <a
                  href="https://bit.ly/3jEK7yD"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hover2 spec-btn-link"
                  style={{ marginLeft: 20, width: 400 }} data-aos="zoom-out"
                >
                  Read Whitepaper
                </a>
              </strong>
            </div>
          </div>

          <div className="numbers-grid">
            <article className="numbers-box" style={{ alignItems: "end" }} data-aos="flip-down">
              <h1 className="title">$760,000</h1>
              <p>Market Cap at IDO</p>
            </article>
            <article className="numbers-box" data-aos="flip-up">
              <p>fully diluted value </p>
              <h1 className="title"> $80M</h1>
            </article>
          </div>
        </div>

        {/* //techinal */}

        <div id="road-map" className="roadmap-carousel-hero">
          <div className="roadmap-wrapper">
          <h1 data-aos="fade-down-right">
            Technical Roadmap
            <br />
          </h1>
          <div className="roadmap-carousel">
            <RoadmapCarousel />
          </div>
          </div>
          {/* //logo */}
        </div>

        {/* //team */}
        <div
          id="team"
          className="light-gradient"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="masonry-container">
            <section className="masonry-grid">
              <article className="card-clickable" data-aos="fade-down">
                <main>
                  <h1>Gamesta Team</h1>
                </main>
                <figure data-aos="fade-down">
                  <img src={davidProfile} alt="" />
                </figure>
                <main data-aos="fade-down">
                  <h4 >David Silvester</h4>
                  <strong>Head of Research & BD</strong>
                  <p data-aos="fade-down">
                    David has 8 years experience developing and consulting
                    businesses in the global start-up scene. He’s an active
                    crypto trader and VC founder, with a passionate focus on the
                    power of Blockchain to connect, entertain, and solve world
                    problems. He has a wealth of academic and business research
                    experience, a Masters in Service Design (UX/CX), an Oxford
                    University certification in Blockchain development and an
                    MBA.
                  </p>
                </main>
              </article>

              <article className="card-clickable">
                <figure data-aos="fade-down">
                  <img src={spencerProfile} alt="" />
                </figure>
                <main data-aos="fade-down">
                  <h4>Spencer Taring</h4>
                  <strong>CEO</strong>
                  <p>
                    Founder of VMG & DopeWarz, Spencer comes with a wealth of
                    experience in both startups & crypto, having exited 5+
                    businesses in a 20 year career of entrepreneurship. He also
                    is an internationally renowned DJ and runs a successful
                    youtube channel called Crypto Money Life. A regular guest on
                    Bitboys ATB show, he is well connected within the crypto &
                    influencer community.
                  </p>
                </main>
              </article>
              <article className="card-clickable" data-aos="fade-down">
                <div style={{ height: 60 }}></div>
                <figure>
                  <img src={tomasProfile} alt="" />
                </figure>
                <main>
                  <h4 data-aos="fade-down">Tomas Wolf</h4>
                  <strong data-aos="fade-down">COO</strong>
                  <p data-aos="fade-down">
                    Tom is an Active Stock, Commodities and Crypto swing trader,
                    financial educator and Angel Investor. Since discovering the
                    potential of crypto gaming he has been utilizing in-game
                    assets and teams of gamers to produce income for themselves,
                    and a great return for investors, operating a team of 100+
                    Indonesians in Bali.
                  </p>
                </main>
              </article>
              <article
                className="card-clickable"
                style={{ width: 0, height: 0, display: "none" }}
                data-aos="fade-down"></article>
              <article className="card-clickable" data-aos="fade-down"></article>
              <article className="card-clickable" data-aos="fade-down">
                <figure>
                  <img src={belloProfile} alt="" />
                </figure>
                <main>
                  <h4 data-aos="fade-down">Bello Andreas</h4>
                  <strong data-aos="fade-down">CTO</strong>
                  <p data-aos="fade-down">
                    Bello has a wealth of experience in coding, with a deep
                    understanding of C ,C++, Javascript, VBA, Java, Python, Rust
                    languages (to name a few). Since 2018 Bello moved his focus
                    into Solidity, PHP, & HTML 5, to follow his vision of
                    creating advanced web3.0 applications integrated with the
                    blockchain. His role in Gamesta is to ensure delivery of the
                    Smart Contracts, Web App, and technical infrastructure for
                    the Guild.
                  </p>
                </main>
              </article>
              <article className="card-clickable" data-aos="fade-down">
                <figure>
                  <img src={jodyProfile} alt="" />
                </figure>
                <main>
                  <h4>Jody Taylor</h4>
                  <strong>COO</strong>
                  <p>
                  Chief Operating Officer Jody Taylor brings a world of experience and intuitive skills to Vous Media Group. Strength in strategic planning and a strong compulsion to create working solutions in all aspects of operations are well characterized by years of strategy consulting, change management and custom operational architectures. Though Jody is an avid investor in private companies, he is no stranger to the power of blockchain technologies and their influential potential over the entertainment sector. Jody is in the right place to move VMG forward.
                  </p>
                </main>
              </article>
              <article className="card-clickable" data-aos="fade-down"></article>
              <article className="card-clickable" data-aos="fade-down">
                {/* <figure>
                <img src={spencerProfile} alt="" />
              </figure>
              <main>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  convallis sodales erat vel accumsan. Nam eget massa nec sem
                  vulputate ullamcorper vel quis justo. Duis rhoncus tempor
                  tempus. Nulla facilisi. Maecenas nulla ante, lacinia ac
                  consectetur non, aliquet sollicitudin libero. Quisque congue
                  odio sodales dui fermentum ac laoreet mauris eleifend. Nulla
                  facilisi. Phasellus vel erat a ante pharetra pharetra.
                </p>
              </main> */}
              </article>
              <article className="card-clickable"></article>
            </section>
          </div>
        </div>

        {/* //dfdf */}

        <div
          className="advisors-hero"
          style={{ maxWidth: `90%`, marginTop: 50 }}
        >
          <div className="title">Advisors</div>
          <div className="advisors-grid">
            <article className="advisors-card" data-aos="flip-left">
              <article className="card-clickable">
                <figure>
                  <img src={samProfile} alt="" />
                </figure>
                <main>
                  <h4>Sam Maz</h4>
                  <strong>Vespertine Capital</strong>
                  <p>
                    Master Nomad holds a Ph.D. and currently works as a senior
                    data scientist, having honed an expertise in AI and
                    machine-learning techniques across numerous industries,
                    including healthcare, regulatory services, and M&A
                    investment banking. He is also an experienced crypto advisor
                    who has gained trust and established relationships with
                    numerous entities across the crypto landscape.
                  </p>
                </main>
              </article>
            </article>
            <article className="advisors-card" data-aos="flip-left">
              <article className="card-clickable">
                <figure>
                  <img src={sunProfile} alt="" />
                </figure>
                <main>
                  <h4>Sundeep</h4>
                  <strong>Trustswap</strong>
                  <p>
                    Core Team Member of TrustSwap. Designed tokenomics for
                    various projects and/or serving as a strategic
                    advisor/consultant for multiple projects spanning across
                    DeFi and GameFi like QANX, BlockBank, LedgerScore, Carbon,
                    ISPOLINK, Fidira, Sekuritance, Oneto11, etc. Has a
                    professional background in Engineering with multiple
                    graduate degrees. Has 5+ years experience in the
                    cryptocurrency space.
                  </p>
                </main>
              </article>
            </article>
            <article className="advisors-card" data-aos="flip-left">
              <article className="card-clickable">
                <figure>
                  <img src={maxProfile} alt="" />
                </figure>
                <main>
                  <h4>Max Dier</h4>
                  <strong>Gamestation</strong>
                  <p>
                    Maximilian Dier is skilled at discovering and scrutinizing
                    long-term investment opportunities in the cryptocurrency
                    industry. He has sourced tens of millions in fundraising,
                    helping launch the biggest projects in the space. He has
                    grown a reputation for being honest and hard-working and a
                    dependable friend to countless projects.
                  </p>
                </main>
              </article>
            </article>
            <article className="advisors-card" data-aos="flip-left">
              <article className="card-clickable">
                <figure>
                  <img src={willyProfile} alt="" />
                </figure>
                <main>
                  <h4>Willy</h4>
                  <strong>Equinox</strong>
                  <p>
                    CEO of Equinox. Willy is more than 10 years an experienced
                    Chief Executive Officer. Entrepreneur in the field of
                    blockchain and cryptocurrency since 2011, Fund Manager at
                    Cryptokerr VC (now Equinox VC Studio) and Advisor and
                    Investor involved in launching over 80 projects in the
                    space.
                  </p>
                </main>
              </article>
            </article>
          </div>
        </div>

        {/* //investors */}

        <div
        id="partnership"
          className="investors-hero"
          style={{ maxWidth: `90%`, marginTop: 50 }}
        >
          <div className="title">Partners & Investors</div>
          <div className="investors-grid">
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={dopeWarzIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={gameStnIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={vmgLogo} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={equLogo} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={oxBullLogo} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={novLogo} alt="" />
              </figure>
            </article>

            {/* //2 */}
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={critIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={ghafIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={legionIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={lpiIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={bluewheelIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={bcaIcon} alt="" />
              </figure>
            </article>
            <article className="investors-card" data-aos="flip-up">
              <figure>
                <img src={brotherIcon} alt="" />
              </figure>
            </article>
          </div>
        </div>

        {/* //Incubator */}
        <Incubators />
        
        {/* //blog */}
        <Blog />

        
        <Footer />
      </div>
      {ShowAccouncement && <AnnouncementModel handleModelClose={handleModelClose} />}
    </div>
}
     
    </>
  );
}

export default Home;