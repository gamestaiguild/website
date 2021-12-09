import React from "react";
import Copper from '../../assets/copper.png';
import ArrowRight from '../../assets/arrow-right.png';
import tesla from '../../assets/tesla.png';
import '../../styles/copper.scss'

const CopperLaunch = (props) => {

    const {countDownTime} = props
  return (
    <div className="footer-copper-container">
      <div className="copper-wrapper">
        <img src={Copper} alt="" />
      </div>
      <p className="launch-text">Launch Auction starts in</p>
      <div className="contdown-cover">
      <div id="countdown">
        <div id="tiles">
          <span>{countDownTime.days}</span>
          <span>{countDownTime.hours}</span>
          <span>{countDownTime.minutes}</span>
          <span>{countDownTime.seconds}</span>
        </div>
      </div>
      <ul className="inline-list">
        <li className="countdown-list-item">Days</li>
        <li className="countdown-list-item">Hours</li>
        <li className="countdown-list-item">Min</li>
        <li className="countdown-list-item">Sec</li>
      </ul>
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
