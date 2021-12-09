import React, { useState, useEffect } from "react";
import Copper from "../../assets/copper.png";
import ArrowRight from "../../assets/arrow-right.png";
import tesla from "../../assets/tesla.png";
import "../../styles/copper.scss";
import live1 from "../../assets/live1.png";
import live2 from "../../assets/live2.png";
import live3 from "../../assets/live3.png";

const CopperLaunch = (props) => {
  const { countDownTime, isCoundownActive } = props;

  const [liveImage, setliveImage] = useState(live1);

  const liveImages = [live1, live2, live3];
  useEffect(() => {
    if (!isCoundownActive) {
      let index = 0;
      setInterval(() => {
        setliveImage(liveImages[index]);
        index++;
        if (index > 2) {
          index = 0;
        }
      }, 1000);
    }
  }, [isCoundownActive]);

  return (
    <div className={ isCoundownActive ? "footer-copper-container current-countdown" : "live-footer-copper-container footer-copper-container"}>
      <div className="copper-wrapper">
        <img src={Copper} alt="" />
      </div>
      <p className="launch-text">
        {isCoundownActive ? "Launch Auction starts in" : "Launch Auction"}
      </p>
      <div className="contdown-cover">
        {isCoundownActive ? (
          <div id="countdown">
            <div id="tiles">
              <span>{countDownTime.days}</span>
              <span>{countDownTime.hours}</span>
              <span>{countDownTime.minutes}</span>
              <span>{countDownTime.seconds}</span>
            </div>
          </div>
        ) : (
          <div className="footer-live-auction">
            <div className="live-wrapper">
              <div className="live-logo">
                <img src={liveImage} alt="" />
              </div>
              <p>Live Now!</p>
            </div>
            <div id="countdown">
              <div id="tiles">
                <p>Time left:</p>
                <span className="days-box">
                  {countDownTime.days}
                  <span className="days">Days</span>
                </span>
                <span className="hours-box">
                  {countDownTime.hours}
                  <span className="hours">Hours</span>
                </span>
              </div>
            </div>
          </div>
        )}
        {isCoundownActive && (
          <ul className="inline-list">
            <li className="countdown-list-item">Days</li>
            <li className="countdown-list-item">Hours</li>
            <li className="countdown-list-item">Min</li>
            <li className="countdown-list-item">Sec</li>
          </ul>
        )}
      </div>
      <div className="button-wrapper">
        <a href="https://contest.gamesta.ai" target="_blank" rel="noreferrer">
          Contribute <img src={ArrowRight} alt="" />
        </a>
      </div>
      <div className="tesla">
        <img src={tesla} alt="" className="tesla-img" />
        <p>and win a Tesla car!</p>
      </div>
    </div>
  );
};

export default CopperLaunch;
