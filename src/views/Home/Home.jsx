import "../../styles/global.scss";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "../../components/Carousel";
// import AnnouncementModel from "../../components/modals/AnnouncementModal";
import Loader from "../../components/loader/Loader";
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
import BusinessModel from "../../components/businessModel/BusinessModel";
import ValueProposition from "../../components/valueProposition/ValueProposition";
import Advisors from "../../components/advisors/Advisors";
import PartnersInvestors from "../../components/partnersInvestors/PartnersInvestors";
import Tokenomics from "../../components/tokenomics/Tokenomics";
import RoadMap from "../../components/roadMap/RoadMpa";
import Team from "../../components/team/Team";
import AnimatedHeader from "../../components/Layouts/AnimatedHeader";
import Hero from "../../components/hero";
import CopperLaunch from "../../components/copperlaunch";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // const [ShowAccouncement, setShowAccouncement] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [footerCopperVisible, setFooterCopperVisible] = useState(false);
  const [isCoundownActive, setisCoundownActive] = useState(true);
  const [countDownTime, setcountDownTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [countDownTimeleft, setcountDownTimeleft] = useState({
    days: "",
    hours: "",
  });
  const [isHamBurger, setIsHamBurger] = useState(false)

  const onChangeHamBurger = () =>{
    setIsHamBurger(!isHamBurger)
  }

  const [isAuctionFinished, setIsAuctionFinished] = useState(false);

  const is2500 = useMediaQuery({ query: "(min-width: 2500px)" });
  const is1200 = useMediaQuery({ query: "(min-width: 1200px)" });


  useEffect(() => {
    const listenToScroll = () => {
      const limit = is2500 ? 1500 : 1199;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > limit) {
        setFooterCopperVisible(true);
      } else {
        setFooterCopperVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, [is2500]);

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
    if (!isLoading && is1200) {
      window.scrollBy(0, 400);
      window.scrollBy({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });

      // var x = 1;
      // var y = 10;
      // setInterval(function () {
      //   if(x < 475){
      //     window.scroll(0, x);
      //     x = x + 75;
      //   }
      // }, y);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && isCoundownActive) {
      // 2pm UTC 16th Dec
      var target_date = new Date("2021-12-16T14:00:00Z");

      if (target_date.getTime() < new Date().getTime()) {
        setisCoundownActive(false);
      }

      var days, hours, minutes, seconds;

      if (isCoundownActive) {
        getCountdown();

        setInterval(function () {
          getCountdown();
        }, 1000);
      }

      function getCountdown() {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;

        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));

        if (
          days === "00" &&
          hours === "00" &&
          minutes === "00" &&
          seconds === "00"
        ) {
          setisCoundownActive(false);
        }

        setcountDownTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }

      function pad(n) {
        return (n < 10 ? "0" : "") + n;
      }
    }
    return {};
  }, [isLoading, isCoundownActive]);

  useEffect(() => {
    if (!isLoading && !isAuctionFinished && !isCoundownActive) {
      // 19th Dec 2pm utc
      var target_date = new Date("2021-12-19T14:00:00Z");
      var days, hours, minutes, seconds;

      if (target_date.getTime() < new Date().getTime()) {
        setIsAuctionFinished(true);
      }

      if (!isAuctionFinished) {
        getCountdown();

        setInterval(function () {
          getCountdown();
        }, 1000);
      }

      function getCountdown() {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;

        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));

        hours = pad(parseInt(seconds_left / 3600));

        if (
          days === "00" &&
          hours === "00" &&
          minutes === "00" &&
          seconds === "00"
        ) {
          setIsAuctionFinished(true);
        }

        setcountDownTimeleft({
          days,
          hours,
        });
      }

      function pad(n) {
        return (n < 10 ? "0" : "") + n;
      }
    }
    return {};
  }, [isLoading, isCoundownActive, isAuctionFinished]);

  // const handleModelClose = () => {
  //   setShowAccouncement(false);
  // };

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

  const updateLoadingStatus = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    updateLoadingStatus();
    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={isHamBurger ? 'move stop-scroller' : "move"}>
          {/* <Header /> */}

          <div className="head-animation-wrapper">
            <AnimatedHeader onChangeHamBurger={onChangeHamBurger} />
            <Hero
              isLoading={isLoading}
              countDownTime={
                isCoundownActive ? countDownTime : countDownTimeleft
              }
              isAuctionFinished={isAuctionFinished}
              isCoundownActive={isCoundownActive}
            />
          </div>
          <AboutUs />

          <div className="other-wrapper">
            <PlayToEarn />
            <Market />
            <GameBanner />

            <div
              className="light-gradient"
              style={{ width: "100%", height: "100%" }}
            >
              <BusinessModel />
              <ValueProposition />
              <Carousel />
              <Dao />
            </div>

            <EcoSystem />
            <BlackGamexCard />
            <Tokenomics />
            <RoadMap />
            <Team />
            <Advisors />
            <PartnersInvestors />
            <Incubators />
            <Blog />
            <Footer />
          </div>
          {/* {ShowAccouncement && (
            <AnnouncementModel handleModelClose={handleModelClose} />
          )} */}

          {footerCopperVisible && (
            <CopperLaunch
              countDownTime={
                isCoundownActive ? countDownTime : countDownTimeleft
              }
              isAuctionFinished={isAuctionFinished}
              isCoundownActive={isCoundownActive}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Home;
