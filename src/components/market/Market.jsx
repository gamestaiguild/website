import React from "react";
import CountUp from "react-countup";
import up from "../../assets/market/up.png";
import down from "../../assets/market/downi.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "../../styles/market.scss";

const Market = () => {
  return (
    <div className="chart-cover market-container">
      <Controller>
        <div className="chart-container market">
          <Scene triggerHook="onCenter" duration={800}>
            {(progress) => (
              <div className="sticky">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      css: {
                        zIndex: 1000,
                        position: "relative",
                        width: "100%",
                        transform: "rotate(270deg)",
                        opacity: 0,
                        scale: 1,
                      },
                    }}
                    to={{
                      css: {
                        zIndex: 1000,
                        position: "relative",
                        width: "100%",
                        transform: "rotate(360deg)",
                        opacity: 1,
                        scale: 1,
                      },
                    }}
                  >
                    <div>
                      <img className="up-img" src={up} alt="" />
                    </div>
                  </Tween>
                </Timeline>

                <div className="chart-wrapper">
                  <div className="chart-content">
                    <h1 className="title">Market</h1>
                    <p className="des">
                      The gaming industry has made more revenue than the music &
                      film industries combined, every year for the last 8 years.
                    </p>
                    <div className="sub-des" style={{ marginTop: 40 }}>
                      The trend is glaringly apparent and the sector is growing
                      fast.
                      <ul className="inline-list">
                        <li className="inline-list-item">
                          <a
                            href="https://bit.ly/3jEK7yD"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-hover spec-btn-link"
                            style={{
                              width: 300,
                              fontSize: 16,
                              lineHeight: "16px",
                              fontWeight: "400",
                            }}
                          >
                            Read More in our Whitepaper
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chart-inner-wrapper graph-chart-inner-wrapper">
                    <div className="progress-bar__container">
                      <div className="progress-bar__wrap">
                        {/* <div
                          className="bar-value game-chart"
                          style={{ height: `100%` }}
                          title="Gaming"
                        ></div> */}
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              css: {
                                width: "300%",
                                opacity: 0,
                              },
                              
                            }}
                            to={{
                              css: {
                                opacity: 1,
                                width: "100%",
                              },
                            }}
                          >
                            <div
                              className="bar-value game-chart"
                              style={{ height: `100%` }}
                              title="Gaming"
                            ></div>
                          </Tween>
                        </Timeline>

                        <span className="bar-title">
                          $
                          <CountUp
                            startOnMount={true}
                            duration="1"
                            start={0}
                            end={180}
                          />
                          B
                        </span>
                      </div>
                      <div className="progress-bar__wrap">
                        {/* <div
                          className="bar-value flim-chart"
                          title="Film"
                          style={{ height: `40%` }}
                        ></div> */}
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              css: {
                                width: "300%",
                                opacity: 0,
                              },
                            }}
                            to={{
                              css: {
                                opacity: 1,
                                width: "100%",
                              },
                            }}
                          >
                            <div
                              className="bar-value flim-chart"
                              title="Film"
                              style={{ height: `40%` }}
                            ></div>
                          </Tween>
                        </Timeline>
                        <span
                          className="bar-title"
                          style={{ top: "63%", fontSize: 24 }}
                        >
                          $
                          <CountUp
                            startOnMount={true}
                            duration="1"
                            start={0}
                            end={51}
                          />
                          B
                        </span>
                      </div>
                      <div className="progress-bar__wrap ">
                        {/* <div
                          title="Music"
                          className="bar-value music-chart"
                          style={{ height: `20%` }}
                        ></div> */}

                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              css: {
                                width: "300%",
                                opacity: 0,
                              },
                            }}
                            to={{
                              css: {
                                opacity: 1,
                                width: "100%",
                              },
                            }}
                          >
                            <div
                              title="Music"
                              className="bar-value music-chart"
                              style={{ height: `20%` }}
                            ></div>
                          </Tween>
                        </Timeline>
                        <span
                          className="bar-title"
                          style={{ top: "83%", fontSize: 18 }}
                        >
                          $
                          <CountUp
                            startOnMount={true}
                            duration="1"
                            start={0}
                            end={22}
                          />
                          B
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      css: {
                        zIndex: 1000,
                          position: "relative",
                          width: "100%",
                          transform: "rotate(270deg)",
                          opacity: 0.8,
                          scale: 1,
                        background: 'white'
                      }
                    }}
                    to={{
                      css: {
                        zIndex: 1000,
                        position: "relative",
                        width: "100%",
                        transform: "rotate(360deg)",
                        opacity: 0,
                        scale: 1,
                        background: 'white'
                      },
                    }}
                  >
                    <div className="dwn-img">
                      <img className="down-img" src={down} alt="" />
                    </div>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
      </Controller>
    </div>
  );
};

export default Market;
