import React from "react";
import incuback from "../../assets/incuback/incuback.png";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import styled from "styled-components";

const ScrollStyled = styled.div`
  .sticky {
    width: 100%;
    position: relative;
    z-index: 1000;

    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;

      .home-content {
        position: absolute;
      }
      img {
        position: relative;
      }
    }
  }
`;

const Incubators = (props) => {
  return (
    <ScrollStyled>
      <Controller>
        <div className="incubator-hero">
          <Scene triggerHook="onEnter" duration={600}>
            {(progress) => (
              <div className="">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      css: {
                        opacity: 0,
                        scale: 6,
                        transform: "rotate(320deg)",
                        transformOrigin: "0 0",
                      },
                    }}
                    to={{
                      css: {
                        opacity: 1,
                        scale: 1,
                        transform: "translate3d(31.302px, -100.423px, 0px) rotate(360deg)",
                      },
                    }}
                  >
                    <div className="">
                      <img src={incuback} className="incubator-img" alt="" />
                    </div>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>

          <h2 className="incubator-border-text">Incubator </h2>
        </div>
        <span className="Incubator-bottom-border"></span>
        <div className="incubator" style={{ marginTop: 0 }}>
          <div className="inner">
            <div>
              <h1
                style={{
                  fontSize: `24px`,
                  lineHeight: `120%`,
                }}
              >
                Gamesta brings value through its experience in the industry.
                Specialists in crypto and more prudently GameFi, VMG’s core team
                are looking forward to building one of the most successful
                guilds ever, one that gives high yields to investors but at the
                same time empowers players from all over the globe.
              </h1>

              <p style={{ fontSize: "16px", lineHeight: "130%" }}>
                Through our previous successes, connections, and experience in
                Crypto Projects, we are able to add a unique set of value add
                propositions to projects that we incubate.
              </p>
            </div>
            <a
              href="https://bit.ly/3CsPfwm"
              target="_blank"
              rel="noreferrer"
              className="btn-hover2 spec-btn-link"
            >
              Read more about our Incubator
            </a>
          </div>
        </div>
      </Controller>
    </ScrollStyled>
  );
};

export default Incubators;
