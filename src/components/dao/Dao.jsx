import React from "react";
import daoBackground from "../../assets/daoBackground.png";
import daoChart from "../../assets/daoChart.png";

import Technology from "../../assets/Frame62.png";
import Empowerment from "../../assets/Frame63.png";
import GovernanceStructure from "../../assets/Frame64.png";
import tokenIcon from "../../assets/token.png";

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

const Dao = () => {
  return (
    <ScrollStyled>
      <Controller>
        <div id="dao">
          <div className="dao-hero dad-sectoin">
            <Scene
              triggerHook="onEnter"
              duration={800}
              // pin
            >
              {(progress) => (
                <div className="" style={{ overflow: "hidden" }}>
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          opacity: 0,
                          scale: 2,
                          marginTop: "500px",
                          marginLeft: "780px",
                        },
                      }}
                      to={{
                        css: {
                          opacity: 1,
                          scale: 1,
                          marginTop: "0px",
                          marginLeft: "180px",
                        },
                      }}
                    >
                      <img
                        style={{ margin: "auto" }}
                        src={daoBackground}
                        alt=""
                      />
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
            <div className="dao-container">
              <div className="dao-wrapper">
                <div className="dao-content">
                  <p className="des">
                    We are currently closing the allocations in the seed round
                    before starting our private rounds allocations, and are
                    looking to raise <span> $8,000,000 USD</span> to assist in
                    building a world class asset base and efficient smart
                    contract system.
                  </p>
                  <p className="sub-des">
                    This will enable us to create a DAO which will make key
                    decisions, operate the treasury, and direct the Guild in a
                    fair and equitable manner.
                  </p>
                </div>
                <div className="dao-inner-wrapper dad-dao-inner-wrapper">
                  <Scene
                    triggerHook="onEnter"
                    duration={800}
                    // pin
                  >
                    {(progress) => (
                      <div className="">
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              css: {
                                opacity: 0,
                                scale: 3,
                                marginTop: "500px",
                                marginLeft: "600px",
                              },
                            }}
                            to={{
                              css: {
                                opacity: 1,
                                scale: 1,
                                marginTop: "0px",
                                marginLeft: "0px",
                              },
                            }}
                          >
                            <img src={daoChart} alt="" />
                          </Tween>
                        </Timeline>
                      </div>
                    )}
                  </Scene>
                </div>
              </div>
            </div>
          </div>

          {/* //props */}

          <div className="dao-hero dao-hero-proposals">
            <div className="dao-container">
              <div className="dao-wrapper">
                <div className="dao-content voting">
                  <h1 className="title">
                    Proposals and voting will include, but not be limited to:
                  </h1>
                  <div className="prop-icon-list">
                    <div className="card-grid">
                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span>
                              <img src={Technology} alt="" />
                            </span>
                            <h4 className="prop-title">Technology</h4>
                          </div>
                        </div>
                      </article>

                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span>
                              <img src={tokenIcon} alt="" />
                            </span>
                            <h4 className="prop-title">Token distribution</h4>
                          </div>
                        </div>
                      </article>
                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span>
                              <img src={Empowerment} alt="" />
                            </span>
                            <h4 className="prop-title">
                              Products and projects
                            </h4>
                          </div>
                        </div>
                      </article>

                      <article className="card">
                        <div className="card-header">
                          <div>
                            <span>
                              <img src={GovernanceStructure} alt="" />
                            </span>
                            <h4 className="prop-title">Governance structure</h4>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <p style={{ marginRight: "auto" }}>
                    Whilst the community is maturing, and until the launch of
                    The DAO, we will run financials in a centralised manner,
                    reporting asset acquisitions, gaming profits & yields via a
                    weekly report that will be distributed on the blockchain.
                  </p>
                </div>
                <div className="dao-inner-wrapper">
                  {/* <img src={daoChart}></img> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Controller>
    </ScrollStyled>
  );
};

export default Dao;
