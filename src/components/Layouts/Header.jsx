import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [activesection, setActivesection] = useState("");
  const [showHamBurger, setShowHamBurger] = useState(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

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

  return (
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
      <div className="desktop-header header-content responsive-wrapper">
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
        <div className="header-navigation">
          <nav className="header-navigation-links">
            <a
              href="#about"
              rel="noreferrer"
              className={activesection === "about" ? "active" : ""}
              onClick={() => setPath("about")}
            >
              About us
            </a>
            <a
              href="#play2earn"
              rel="noreferrer"
              className={activesection === "play2earn" ? "active" : ""}
              onClick={() => setPath("play2earn")}
            >
              Play 2 Earn
            </a>
            <a
              href="#business-modal"
              rel="noreferrer"
              className={activesection === "business-modal" ? "active" : ""}
              onClick={() => setPath("business-modal")}
            >
              Business Model
            </a>
            <a
              href="#dao"
              rel="noreferrer"
              className={activesection === "dao" ? "active" : ""}
              onClick={() => setPath("dao")}
            >
              The DAO
            </a>
            <a
              href="#eco-system"
              rel="noreferrer"
              className={activesection === "eco-system" ? "active" : ""}
              onClick={() => setPath("eco-system")}
            >
              Ecosystem
            </a>
            <a
              href="#road-map"
              rel="noreferrer"
              className={activesection === "road-map" ? "active" : ""}
              onClick={() => setPath("road-map")}
            >
              Roadmap
            </a>
            <a
              href="#team"
              rel="noreferrer"
              className={activesection === "team" ? "active" : ""}
              onClick={() => setPath("team")}
            >
              Team
            </a>
            <a
              href="#partnership"
              rel="noreferrer"
              className={activesection === "partnership" ? "active" : ""}
              onClick={() => setPath("partnership")}
            >
              Partnership
            </a>
            <a
              href="#contactus"
              rel="noreferrer"
              className={activesection === "contactus" ? "active" : ""}
              onClick={() => setPath("contactus")}
            >
              Contact us
            </a>
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
                className={showHamBurger ? "hamburger is-active" : "hamburger"}
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
              <a
                href="#about"
                rel="noreferrer"
                className={activesection === "about" ? "active" : ""}
                onClick={() => setPath("about")}
              >
                About us
              </a>
              <a
                href="#play2earn"
                rel="noreferrer"
                className={activesection === "play2earn" ? "active" : ""}
                onClick={() => setPath("play2earn")}
              >
                Play 2 Earn
              </a>
              <a
                href="#business-modal"
                rel="noreferrer"
                className={activesection === "business-modal" ? "active" : ""}
                onClick={() => setPath("business-modal")}
              >
                Business Model
              </a>
              <a
                href="#dao"
                rel="noreferrer"
                className={activesection === "dao" ? "active" : ""}
                onClick={() => setPath("dao")}
              >
                The DAO
              </a>
              <a
                href="#eco-system"
                rel="noreferrer"
                className={activesection === "eco-system" ? "active" : ""}
                onClick={() => setPath("eco-system")}
              >
                Ecosystem
              </a>
              <a
                href="#road-map"
                rel="noreferrer"
                className={activesection === "road-map" ? "active" : ""}
                onClick={() => setPath("road-map")}
              >
                Roadmap
              </a>
              <a
                href="#team"
                rel="noreferrer"
                className={activesection === "team" ? "active" : ""}
                onClick={() => setPath("team")}
              >
                Team
              </a>
              <a
                href="#partnership"
                rel="noreferrer"
                className={activesection === "partnership" ? "active" : ""}
                onClick={() => setPath("partnership")}
              >
                Partnership
              </a>
              <a
                href="#contactus"
                rel="noreferrer"
                className={activesection === "contactus" ? "active" : ""}
                onClick={() => setPath("contactus")}
              >
                Contact us
              </a>
              <div className="header-navigation-actions">
                <a href="#" className="button">
                  <span style={{ fontWeight: "bold" }}>Login to App</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
