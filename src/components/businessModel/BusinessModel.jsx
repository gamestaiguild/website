import downArrowIcon from "../../assets/downArrow.png";
import chartIcon from "../../assets/chart.png";
import peopleIcon from "../../assets/people.png";
import stockIcon from "../../assets/stock.png";
import nftSmallIcon from "../../assets/nftSmall.png";
import tokenSmallIcon from "../../assets/tokenSmall.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const BusinessModel = () => {
  return (
    <Controller>
      <div id="business-modal" className="basic-container">
        <div className="basic-wrapper">
          <div className="basic-content">
            <Scene triggerHook="onEnter" duration={600}>
              {(progress) => (
                <div className="">
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          marginLeft: "-500px",
                          opacity: 0,
                          scale: 0,
                        },
                      }}
                      to={{
                        css: {
                          marginLeft: "0px",
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                    >
                      <h1 className="title">Business Model & Activities</h1>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
            <p className="des">
              The general business activities of the Guild will fall under the
              following categories.
            </p>
          </div>
          <div className="chart-inner-wrapper">
            <Scene triggerHook="onEnter" duration={800}>
              {(progress) => (
                <div className="">
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          opacity: 0,
                          scale: 0,
                        },
                      }}
                      to={{
                        css: {
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                    >
                      <div className="icon-list">
                        <details>
                          <summary>
                            <div>
                              <span>
                                <img src={nftSmallIcon} alt="" />
                              </span>
                              <h3>
                                <strong>
                                  Acquisition of in-game assets (NFTs)
                                </strong>
                              </h3>
                            </div>
                          </summary>
                        </details>

                        <details>
                          <summary>
                            <div>
                              <span>
                                <img src={chartIcon} alt="" />
                              </span>
                              <h3>
                                <strong>
                                  Active Market Research for new games coming to
                                  market
                                </strong>
                              </h3>
                            </div>
                          </summary>
                        </details>

                        <details>
                          <summary>
                            <div>
                              <span>
                                <img src={peopleIcon} alt="" />
                              </span>

                              <h3>
                                <strong>
                                  Building a global community of players,
                                  focused mainly on the underprivileged
                                  communities of Indonesia, Vietnam,
                                  Philippines, etc.
                                </strong>
                              </h3>
                            </div>
                          </summary>
                        </details>

                        <details>
                          <summary>
                            <div>
                              <span>
                                <img src={tokenSmallIcon} alt="" />
                              </span>
                              <h3>
                                <strong>
                                  Producing revenue from activation of NFTs and
                                  their utilities
                                </strong>
                              </h3>
                            </div>
                          </summary>
                        </details>

                        <details>
                          <summary>
                            <div>
                              <span>
                                <img src={stockIcon} alt="" />
                              </span>
                              <h3>
                                <strong>Staking services</strong>
                              </h3>
                            </div>
                          </summary>
                        </details>

                        <details>
                          <summary>
                            <div>
                              <span>
                                <img src={downArrowIcon} alt="" />
                              </span>

                              <h3>
                                <strong>
                                  VC investments into exciting projects being
                                  added to our community
                                </strong>
                              </h3>
                            </div>
                          </summary>
                        </details>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </div>
        </div>
      </div>
    </Controller>
  );
};

export default BusinessModel;
