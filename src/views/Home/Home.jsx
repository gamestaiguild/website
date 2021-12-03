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

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [ShowAccouncement, setShowAccouncement] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [countDownTime, setcountDownTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

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
      // 2pm UTC 15th Dec
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
  }, [isLoading]);

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
          
          <Hero isLoading={isLoading} countDownTime={countDownTime} />
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
        </div>
      )}
    </>
  );
};

export default Home;
