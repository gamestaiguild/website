import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = (props) => {
  const { headerVisible } = props;
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
    if (headerVisible) {
      setActivesection(window.location.pathname.trim().replace("/", ""));
    } else {
      setActivesection(window.location.hash.trim().replace("#", ""));
    }
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
        show || headerVisible
          ? showHamBurger
            ? "header header-visible burger-open"
            : "header header-visible new-header-visible"
          : showHamBurger
          ? "header burger-open"
          : "header"
      }
    >
      <div className="desktop-header header-content responsive-wrapper">
        <div className="header-logo">
          <Link
            to={"/"}
            // href="#"
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            <div className="logomove">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div className="header-navigation">
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
            <Link to="/">
              <div>
                <img src={logo} alt="" />
              </div>
            </Link>
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
                href="/#contactus"
                rel="noreferrer"
                className={activesection === "contactus" ? "active" : ""}
                onClick={() => setPath("contactus")}
              >
                Contact us
              </Link>
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
