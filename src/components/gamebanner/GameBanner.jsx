import React from "react";
import gameControllerBackground from "../../assets/gameControllerHero.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const GameBanner = () => {
  return (
    <div>
      <Controller>
        <div className="sub-hero">
          <div className="inner">
            <Scene triggerHook="onEnter" duration={800}>
              {(progress) => (
                <div className="sticky">
                  <div>
                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{
                          css: {
                            opacity: 0,
                            scale: 3,
                            // transform: "rotate(330deg)",
                            marginLeft: "-300px",
                          },
                        }}
                        to={{
                          css: {
                            opacity: 1,
                            scale: 1,
                            // transform: "rotate(360deg)",
                            marginLeft: "300px",
                          },
                        }}
                      >
                        <h1>Gamesta envisages a world where video games</h1>
                      </Tween>
                    </Timeline>

                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{
                          css: {
                            opacity: 0,
                            scale: 3,
                            // transform: "rotate(3600deg)",
                            marginRight: "-300px",
                          },
                        }}
                        to={{
                          css: {
                            opacity: 1,
                            scale: 1,
                            //  transform: "rotate(360deg)",
                            marginRight: "300px",
                          },
                        }}
                      >
                        <h1>
                          <span style={{ marginLeft: `80px` }}>
                            without a play 2 earn model,
                          </span>
                        </h1>
                      </Tween>
                    </Timeline>

                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{
                          css: {
                            opacity: 0,
                            scale: 3,
                            transform: "rotate(330deg)",
                            marginRight: "-150px",
                            marginTop: "100px",
                          },
                        }}
                        to={{
                          css: {
                            opacity: 1,
                            scale: 1,
                            transform: "rotate(360deg)",
                            marginRight: "150px",
                            marginTop: "0px",
                          },
                        }}
                      >
                        <span style={{ marginLeft: "130px" }}>
                          will cease to exist.
                        </span>
                      </Tween>
                    </Timeline>
                  </div>

                  <div className="sub-image-wrapper">
                    <div className="inner-image">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 0.5,
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                            },
                          }}
                        >
                          <img src={gameControllerBackground} alt="" />
                        </Tween>
                      </Timeline>

                      <span className="only-text">Only</span>
                      
                    </div>
                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{
                          css: {
                            opacity: 0,
                            scale: 2,
                            marginTop: "300px",
                          },
                        }}
                        to={{
                          css: {
                            opacity: 1,
                            scale: 1,
                            marginTop: "0px",
                          },
                        }}
                      >
                        <p>
                          We envisage an exponential growth in this number as
                          the underlying mechanics of the model grossly out
                          perform anything from the traditional “pay 2 play”
                          model.
                        </p>
                      </Tween>
                    </Timeline>
                  </div>
                </div>
              )}
            </Scene>
          </div>
        </div>
      </Controller>
    </div>
  );
};

export default GameBanner;
