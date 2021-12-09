import "../../styles/global.scss";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "../../components/Carousel";
import AnnouncementModel from "../../components/modals/AnnouncementModal";
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
  const [ShowAccouncement, setShowAccouncement] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [footerCopperVisible, setFooterCopperVisible] = useState(false)
  const [isCoundownActive, setisCoundownActive] = useState(true);
  const [countDownTime, setcountDownTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [countDownTimeleft, setcountDownTimeleft] = useState({
    days: "",
    hours: ""
  });

  const is2500 = useMediaQuery({ query: "(min-width: 2500px)" });


  const listenToScroll = () => {
    
    const limit = is2500 ? 1500 : 1199
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > limit) {
      setFooterCopperVisible(true);
    } else {
      setFooterCopperVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

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
    if (!isLoading) {
      // 2pm UTC 16th Dec
      var target_date = new Date("2021-12-16T14:00:00Z");

      // December 15, 2021 14:00:00
      //  + 1000 * 3600 * 48; // set the countdown date
      var days, hours, minutes, seconds; // variables for time units

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

        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
          setisCoundownActive(false)
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
    return {}
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && !isCoundownActive) {
      // 19th Dec 2pm utc
      var target_date = new Date("2021-12-19T14:00:00Z");

      var days, hours; 

      getCountdown();

      setInterval(function () {
        getCountdown();
      }, 1000);

      function getCountdown() {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(seconds_left / 3600));

        setcountDownTimeleft({
          days,
          hours
        });
      }

      function pad(n) {
        return (n < 10 ? "0" : "") + n;
      }
    }
    return {}
  }, [isLoading, isCoundownActive]);

  const handleModelClose = () => {
    setShowAccouncement(false);
  };

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
      setIsLoading(false);
    }, 1000);
    return {}
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="move">
          {/* <Header /> */}

          <div className="head-animation-wrapper">
          <AnimatedHeader />
          
          <Hero isLoading={isLoading} countDownTime={isCoundownActive ? countDownTime : countDownTimeleft} isCoundownActive={isCoundownActive} />
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
            {/* //token */}

            <Tokenomics />

            {/* //techinal */}

            <RoadMap />

            {/* //team */}

            <Team />

            {/* Advisors */}
            <Advisors />

            {/* //investors */}

            <PartnersInvestors />

            {/* //Incubator */}
            <Incubators />

            {/* //blog */}
            <Blog />

            <Footer />
          </div>
          {ShowAccouncement && (
            <AnnouncementModel handleModelClose={handleModelClose} />
          )}

        {footerCopperVisible &&  <CopperLaunch countDownTime={isCoundownActive ? countDownTime : countDownTimeleft} isCoundownActive={isCoundownActive} />}
        </div>
      )}
    </>
  );
};

export default Home;
