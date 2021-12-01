import React from "react";
import laptop from "../../assets/laptop.png";
import laptopIcon from "../../assets/lcd-with-icon.png";
import herodbg from "../../assets/animation/rectangle28.png";
import heroimg22 from "../../assets/animation/image22.png";
import heroimg24 from "../../assets/animation/image24.png";
import heroimg25 from "../../assets/animation/image25.png";
import heroimg28 from "../../assets/animation/image28.png";
import heroimg31 from "../../assets/animation/image31.png";
import heroimg34 from "../../assets/animation/image34.png";
import heroimg39 from "../../assets/animation/image39.png";
import heroimg41 from "../../assets/animation/image41.png";
import watermark from "../../assets/watermark.png";
import "../../styles/hero.scss";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { useMediaQuery } from "react-responsive";

const Hero = ({ countDownTime }) => {
  const is1440 = useMediaQuery({ query: "(max-width: 1440px)" });
  const is1200 = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <>
      {!is1200 ? (
        <div className="heroSpec cover-spec-all">
          <Controller>
            <div className="hero-wrapper">
              <div className="spec-home-background">
                <Scene triggerHook="onLeave" duration={400}>
                  {(progress) => (
                    <div className="sticky">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{ x: "10%", top: "400px", opacity: 0 }}
                          to={{ x: "10%", top: "10px", opacity: 1 }}
                        >
                          <div className="animation">
                            <section className="header-middle-section">
                              <div className="content">
                                <h1 className="title">
                                  A.I. Powered Guild for NFT Gaming
                                </h1>
                                <p className="des">
                                  Gamesta enabling investors to connect and
                                  empower thousands of under privileged players
                                  throughout the World
                                </p>
                                <div className="sub-des header-btn-wrapper-top">
                                  Join our community
                                  <ul className="inline-list header-btn-wrapper">
                                    <a
                                      href="https://discord.gg/gamestaguild"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-list-item"
                                    >
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
                                    <a
                                      href="https://twitter.com/gamestaguild"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-list-item"
                                    >
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

                                    <a
                                      href="https://t.me/gamestaguild"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-list-item"
                                    >
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
                                    <div id="tiles">
                                      <span>{countDownTime.days}</span>
                                      <span>{countDownTime.hours}</span>
                                      <span>{countDownTime.minutes}</span>
                                      <span>{countDownTime.seconds}</span>
                                    </div>
                                  </div>
                                  <ul className="inline-list">
                                    <li className="countdown-list-item">
                                      Days
                                    </li>
                                    <li className="countdown-list-item">
                                      Hours
                                    </li>
                                    <li className="countdown-list-item">Min</li>
                                    <li className="countdown-list-item">Sec</li>
                                  </ul>
                                </div>
                                <div className="get-ready">
                                  <p>Get Ready to Unleash GameFi Together</p>
                                </div>
                              </div>
                              <div className="image-wrapper">
                                {/* <img src={laptop} alt="" className="desktop-image" /> */}
                                <img
                                  src={laptopIcon}
                                  alt=""
                                  className="mobile-image"
                                />
                              </div>
                            </section>
                          </div>
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
                <div className="hero-section image-wrapper">
                  <Scene triggerHook="onLeave" duration={400} pin>
                    {(progress) => (
                      <div className="specials">
                        <div className="redObj">
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 10,
                                  position: "absolute",
                                  top: is1440 ? "81px" : "118px",
                                  marginLeft: is1440 ? "-109px" : "-134px",
                                  scale: 0.8,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 10,
                                  position: "absolute",
                                  top: is1440 ? "283px" : "362px",
                                  marginLeft: is1440 ? "45px" : "30px",
                                  scale: is1440 ? 1.2 : 1.5,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg34}
                                  className="image34"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-202px" : "-219px",
                                  marginLeft: is1440 ? "-55px" : "-93px",
                                  scale: 1,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "56px" : "123px",
                                  marginLeft: is1440 ? "71px" : "66px",
                                  scale: is1440 ? 1.2 : 1.5,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg25}
                                  className="image25"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-111px" : "-91px",
                                  marginLeft: "524px",
                                  scale: 0.8,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-3px" : "8px",
                                  marginLeft: is1440 ? "218px" : "240px",
                                  scale: 1.5,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg24}
                                  className="image24"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-50px" : "-28px",
                                  marginLeft: is1440 ? "-255" : "-269px",
                                  scale: 0.8,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-30px" : "-15px",
                                  marginLeft: is1440 ? "316px" : "355px",
                                  scale: is1440 ? 1.1 : 1,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg22}
                                  className="image22"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-82px" : "-60px",
                                  marginLeft: is1440 ? "250px" : "231px",
                                  scale: 0.8,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: "38px",
                                  marginLeft: is1440 ? "300px" : "330px",
                                  scale: 1,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg39}
                                  className="image39"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "68px" : "87px",
                                  marginLeft: is1440 ? "285px" : "262px",
                                  scale: 0.7,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 9,
                                  position: "absolute",
                                  top: is1440 ? "-12px" : "-12px",
                                  marginLeft: is1440 ? "350px" : "420px",
                                  scale: is1440 ? 0.8 : 1,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg31}
                                  className="image31"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 8,
                                  position: "absolute",
                                  top: is1440 ? "14px" : "-108px",
                                  marginLeft: is1440 ? "-103px" : "329px",
                                  scale: 0.9,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 8,
                                  position: "absolute",
                                  top: is1440 ? "95px" : "-65px",
                                  marginLeft: is1440 ? "-28px" : "528px",
                                  scale: 1,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg28}
                                  className="image28"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  zIndex: 8,
                                  position: "absolute",
                                  top: is1440 ? "49px" : "74px",
                                  marginLeft: is1440 ? "496px" : "487px",
                                  scale: 1,
                                  opacity: 1,
                                },
                              }}
                              to={{
                                css: {
                                  zIndex: 8,
                                  position: "absolute",
                                  top: is1440 ? "231px" : "296px",
                                  marginLeft: is1440 ? "659px" : "720px",
                                  scale: is1440 ? 1.4 : 1,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img
                                  src={heroimg41}
                                  className="image41"
                                  alt=""
                                />
                              </div>
                            </Tween>
                          </Timeline>
                          <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                scale: 0,
                                top: "100vh",
                                opacity: 0,
                                zIndex: 11,
                              }}
                              to={{
                                css: {
                                  zIndex: 11,
                                  position: "absolute",
                                  top: "115px",
                                  marginLeft: "100px",
                                  scale: 1,
                                  opacity: 1,
                                },
                              }}
                            >
                              <div className="">
                                <img src={laptop} alt="" />
                              </div>
                            </Tween>
                          </Timeline>
                        </div>
                      </div>
                    )}
                  </Scene>
                </div>
              </div>
              <div className="water-mark">
                <p>FLP using Copperlaunch</p>
                <img src={watermark} alt="water-mark" />
                <a
                  href="https://blog.gamesta.ai/gamesta-fair-launch-auction-31ffcc1bd5d3"
                  target="_blank"
                  rel="noreferrer"
                >
                  More info
                </a>
              </div>
            </div>
          </Controller>
        </div>
      ) : (
        <div className="hero-wrapper">
          {/* <div className="hero-section hide">
            <img src={herodbg} className="rectangle28" alt="" />
            <img src={heroimg22} className="image22" alt="" />
        <img src={heroimg24} className="image24" alt="" />
        <img src={heroimg25} className="image25" alt="" />
        <img src={heroimg28} className="image28" alt="" />
        <img src={heroimg31} className="image31" alt="" />
        <img src={heroimg34} className="image34" alt="" />
        <img src={heroimg39} className="image39" alt="" />
        <img src={heroimg41} className="image41" alt="" />
          </div> */}
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
                  <a
                    href="https://discord.gg/gamestaguild"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-list-item"
                  >
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
                  <a
                    href="https://twitter.com/gamestaguild"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-list-item"
                  >
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

                  <a
                    href="https://t.me/gamestaguild"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-list-item"
                  >
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
              <div className="get-ready">
                <p>Get Ready to Unleash GameFi Together</p>
              </div>
            </div>
            <div className="image-wrapper">
              <img src={laptopIcon} alt="" className="mobile-image" />
            </div>
          </section>
          <div className="water-mark">
            <p>FLP using Copperlaunch</p>
            <img src={watermark} alt="water-mark" />
            <a
              href="https://blog.gamesta.ai/gamesta-fair-launch-auction-31ffcc1bd5d3"
              target="_blank"
              rel="noreferrer"
            >
              More info
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
