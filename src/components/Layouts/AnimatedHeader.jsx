import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link } from "react-router-dom";
import "../../styles/animationheader.scss";

const AnimatedHeader = () => {
  const [show, setShow] = useState(false);
  const [activesection, setActivesection] = useState("");
  const [showHamBurger, setShowHamBurger] = useState(false);

  const isDestop = window.innerWidth;

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 400) {
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

  useEffect(() => {
    setActivesection(window.location.hash.trim().replace("#", ""));
  }, []);

  const setPath = (path) => {
    setActivesection(path);
    setShowHamBurger(false);
  };

  const handlehamburger = () => {
    setShowHamBurger(!showHamBurger);
  };

  let htmlIdValue = window.location.hash.trim().replace("#", "");
  useEffect(() => {
    setActivesection(htmlIdValue);
    if (htmlIdValue) {
      const titleElement = document.getElementById(htmlIdValue);
      titleElement.scrollIntoView({ behavior: "smooth" });
    }
    return () => {};
  }, [htmlIdValue]);

  useEffect(() => {
    if (isDestop > 1200) {
      window.addEventListener("scroll", navHighlighter);
    }
    function navHighlighter() {
      const sections = document.querySelectorAll("div[id]");
      let scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;

        const sectionTop =
          current.getBoundingClientRect().top + window.pageYOffset - 50;

        let sectionId = current.getAttribute("id");
        let hrefArray = [
          "about",
          "play2earn",
          "business-modal",
          "dao",
          "eco-system",
          "road-map",
          "team",
          "partnership",
          "contactus",
        ];
        let checkArrayValue = hrefArray.includes(sectionId);
        if (checkArrayValue) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector(
                ".header-navigation-links a[href*=" + sectionId + "]"
              )
              .classList.add("active");
          } else {
            document
              .querySelector(
                ".header-navigation-links a[href*=" + sectionId + "]"
              )
              .classList.remove("active");
          }
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, [show, isDestop]);

  return (
    <Controller>
      <header
        className={
          show
            ? showHamBurger
              ? "header header-visible burger-open"
              : "header header-visible"
            : showHamBurger
            ? "header burger-open"
            : "header"
        }
      >
        <div className="spec-desktop-header">
          <Scene triggerHook="onLeave" duration={400} pin>
            {(progress) => (
              <div className="imgObj spec-head-cover">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      css: {
                        position: "absolute",
                        top: "50vh",
                        // left: "43%",
                        scale: 5,
                        opacity: 1,
                        zIndex: -1,
                      },
                    }}
                    to={{
                      css: {
                        position: "fixed",
                        top: "20px",
                        left: "48px",
                        scale: 1,
                        opacity: 1,
                        zIndex: 9994,
                      },
                    }}
                  >
                    <div className="header-logo">
                      <a
                        href="#"
                        onClick={() => {
                          document.body.scrollTop = 0;
                          document.documentElement.scrollTop = 0;
                        }}
                      >
                        <div className="logomove">
                          <img src={logo} alt="" />
                        </div>
                      </a>
                    </div>
                  </Tween>
                </Timeline>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      css: {
                        zIndex: 7,
                        position: "absolute",
                        top: "-200px",
                        opacity: 1,
                      },
                    }}
                    to={{
                      css: {
                        zIndex: 9991,
                        position: "fixed",
                        top: "0px",
                        opacity: 1,
                      },
                    }}
                  >
                    <div className="desktop-header header-content responsive-wrapper">
                      {/* <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              css: {
                                position: "absolute",
                                top: "75vh",
                                // top: "1500%",
                                // marginTop: "93%",
                                left: "43%",
                                scale: 5,
                                opacity: 1,
                                zIndex: -1,
                                scrollBehaviour: "smooth"
                              },
                            }}
                            to={{
                              css: {
                                position: "relative",
                                top: "0vh",
                                // marginTop: "0%",
                                left: "0%",
                                scale: 1,
                                opacity: 1,
                                zIndex: -1,
                                scrollBehaviour: "smooth"
                              },
                            }}
                          >
                            <div className="header-logo">
                              <a
                                href="#"
                                onClick={() => {
                                  document.body.scrollTop = 0;
                                  document.documentElement.scrollTop = 0;
                                }}
                              >
                                <div className="logomove">
                                  <img src={logo} alt="" />
                                </div>
                              </a>
                            </div>
                          </Tween>
                        </Timeline> */}
                      <div className="logo-space"></div>
                      <div className="header-navigation">
                        <nav className="header-navigation-links">
                          <Link
                            to={{
                              pathname: "/",
                              hash: "about",
                            }}
                            // href="/#about"
                            rel="noreferrer"
                            className={
                              activesection === "about" ? "active" : ""
                            }
                            onClick={() => setPath("about")}
                          >
                            About us
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "play2earn",
                            }}
                            // href="/#play2earn"
                            rel="noreferrer"
                            className={
                              activesection === "play2earn" ? "active" : ""
                            }
                            onClick={() => setPath("play2earn")}
                          >
                            Play 2 Earn
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "business-modal",
                            }}
                            // href="/#business-modal"
                            rel="noreferrer"
                            className={
                              activesection === "business-modal" ? "active" : ""
                            }
                            onClick={() => setPath("business-modal")}
                          >
                            Business Model
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "dao",
                            }}
                            href="/#dao"
                            rel="noreferrer"
                            className={activesection === "dao" ? "active" : ""}
                            onClick={() => setPath("dao")}
                          >
                            The DAO
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "eco-system",
                            }}
                            // href="/#eco-system"
                            rel="noreferrer"
                            className={
                              activesection === "eco-system" ? "active" : ""
                            }
                            onClick={() => setPath("eco-system")}
                          >
                            Ecosystem
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "road-map",
                            }}
                            // href="/#road-map"
                            rel="noreferrer"
                            className={
                              activesection === "road-map" ? "active" : ""
                            }
                            onClick={() => setPath("road-map")}
                          >
                            Roadmap
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "team",
                            }}
                            // href="/#team"
                            rel="noreferrer"
                            className={activesection === "team" ? "active" : ""}
                            onClick={() => setPath("team")}
                          >
                            Team
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "partnership",
                            }}
                            // href="/#partnership"
                            rel="noreferrer"
                            className={
                              activesection === "partnership" ? "active" : ""
                            }
                            onClick={() => setPath("partnership")}
                          >
                            Partnership
                          </Link>
                          <Link
                            to="/incubator"
                            className={
                              activesection === "incubator" ? "active" : ""
                            }
                            onClick={() => setPath("incubator")}
                          >
                            Incubator
                          </Link>
                          <Link
                            to={{
                              pathname: "/",
                              hash: "contactus",
                            }}
                            // href="/#contactus"
                            rel="noreferrer"
                            className={
                              activesection === "contactus" ? "active" : ""
                            }
                            onClick={() => setPath("contactus")}
                          >
                            Contact us
                          </Link>
                        </nav>
                        <div className="header-navigation-actions">
                          <a href="#" className="button">
                            <span>Login to App</span>
                          </a>
                        </div>
                      </div>

                      <a href="#" className="button">
                        <i className="ph-list-bold"></i>
                        <span>Menu</span>
                      </a>
                    </div>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
        <div className="mob-header header-content responsive-wrapper">
          <div className="mob-head">
            <div className="header-logo">
              <a href="#">
                <div>
                  <img src={logo} alt="" />
                </div>
              </a>
            </div>
            <div className="hemburger-container">
              <div className="three col">
                <div
                  onClick={handlehamburger}
                  className={
                    showHamBurger ? "hamburger is-active" : "hamburger"
                  }
                  id="hamburger-1"
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          </div>

          {showHamBurger && (
            <div className="header-navigation mob-header-navigation">
              <nav className="header-navigation-links">
                <Link
                  to={{
                    pathname: "/",
                    hash: "about",
                  }}
                  // href="/#about"
                  rel="noreferrer"
                  className={activesection === "about" ? "active" : ""}
                  onClick={() => setPath("about")}
                >
                  About us
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "play2earn",
                  }}
                  // href="/#play2earn"
                  rel="noreferrer"
                  className={activesection === "play2earn" ? "active" : ""}
                  onClick={() => setPath("play2earn")}
                >
                  Play 2 Earn
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "business-modal",
                  }}
                  // href="/#business-modal"
                  rel="noreferrer"
                  className={activesection === "business-modal" ? "active" : ""}
                  onClick={() => setPath("business-modal")}
                >
                  Business Model
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "dao",
                  }}
                  href="/#dao"
                  rel="noreferrer"
                  className={activesection === "dao" ? "active" : ""}
                  onClick={() => setPath("dao")}
                >
                  The DAO
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "eco-system",
                  }}
                  // href="/#eco-system"
                  rel="noreferrer"
                  className={activesection === "eco-system" ? "active" : ""}
                  onClick={() => setPath("eco-system")}
                >
                  Ecosystem
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "road-map",
                  }}
                  // href="/#road-map"
                  rel="noreferrer"
                  className={activesection === "road-map" ? "active" : ""}
                  onClick={() => setPath("road-map")}
                >
                  Roadmap
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "team",
                  }}
                  // href="/#team"
                  rel="noreferrer"
                  className={activesection === "team" ? "active" : ""}
                  onClick={() => setPath("team")}
                >
                  Team
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "partnership",
                  }}
                  // href="/#partnership"
                  rel="noreferrer"
                  className={activesection === "partnership" ? "active" : ""}
                  onClick={() => setPath("partnership")}
                >
                  Partnership
                </Link>
                <Link
                  to="/incubator"
                  className={activesection === "incubator" ? "active" : ""}
                  onClick={() => setPath("incubator")}
                >
                  Incubator
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    hash: "contactus",
                  }}
                  // href="/#contactus"
                  rel="noreferrer"
                  className={activesection === "contactus" ? "active" : ""}
                  onClick={() => setPath("contactus")}
                >
                  Contact us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </Controller>
  );
};

export default AnimatedHeader;
