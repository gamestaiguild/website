import React from "react";
import gradientCircle from "../../assets/gradientCircle.png";
import DistributingProfits from "../../assets/Frame70.png";
import Staking from "../../assets/Frame69.png";
import Governance from "../../assets/Frame68.png";
import Further from "../../assets/Frame67.png";
import Community from "../../assets/Frame66.png";
import Yield from "../../assets/Frame75.png";
import ProfitsProduced from "../../assets/Frame74.png";
import Persentage from "../../assets/Frame73.png";
import Rewards from "../../assets/Frame72.png";
import Sponsorships from "../../assets/Frame71.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const EcoSystem = () => {
  return (
    <Controller>
      <div id="eco-system" className="eco-container">
        <div className="carousel-hero">
          <div className="inner">
            <div>
              <h1 data-aos="fade-down">
                Ecosystem
                <br />
                <span style={{ marginLeft: `312px` }}>& Treasury</span>
              </h1>
              <div className="players-winning">
                <p className="players-winning-text" data-aos="fade-up">
                  All fees collected from players will be collected in this
                  treasury, and it would also pay out players' winnings.
                </p>
              </div>
              <p className="ecosystem-revolves" data-aos="fade-left">
                The Gamesta ecosystem revolves around the Treasury, which is an
                open and transparent funds system, bankrolling all games
                thereon.
              </p>
            </div>
          </div>
        </div>
        <div className="eco-wrapper">
          <div className="eco-inner-wrapper">
            {/* <img src={gradientCircle}></img> */}
            <div className="grid">
              <div className="grid__img">
                <Scene
                  triggerHook="onEnter"
                  duration={600}
                  // pin
                >
                  {(progress) => (
                    <div>
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
                          <img src={gradientCircle} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </div>

              <div className="grid__card">
                <Scene
                  triggerHook="onEnter"
                  duration={600}
                  // pin
                >
                  {(progress) => (
                    <div className="spec-eco-text">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(280deg)",
                              marginLeft: "-1100px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(360deg)",
                              marginLeft: 0,
                            },
                          }}
                        >
                          <h2 id="title1" aria-hidden="true">
                            Token will be used
                          </h2>
                        </Tween>
                      </Timeline>

                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(300deg)",
                              marginLeft: "-800px",
                              marginTop: "300px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(360deg)",
                              marginLeft: 90,
                              marginTop: "0px",
                            },
                          }}
                        >
                          <h2
                            id="title1"
                            aria-hidden="true"
                            style={{ marginLeft: 90 }}
                          >
                            to transact value within
                          </h2>
                        </Tween>
                      </Timeline>
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(320deg)",
                              marginLeft: "-500px",
                              marginTop: "300px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(360deg)",
                              marginLeft: 200,
                              marginTop: "0px",
                            },
                          }}
                        >
                          <h2
                            id="title1"
                            aria-hidden="true"
                            style={{ marginLeft: 200 }}
                          >
                            the Gamesta Ecosystem
                          </h2>
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </div>

              <div className="grid__card3">
                <div className="eco-content">
                  <h1 className="title" data-aos="fade-up-left">
                    We are creating a total <br />
                    of &nbsp;
                    <strong>1,000,000,000 $GSG </strong>
                    tokens
                  </h1>
                  <p className="des" data-aos="fade-up-left">
                    which will act as the utility token within Gamesta’s
                    network. The token will enable investors to take advantage
                    of the opportunities provided by the play 2 earn ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eco-bottom-hero">
          <div className="inner">
            <div>
              <p>
                Our token will be based on Polygon (MATIC) to leverage the ETH
                network whilst keeping the gas & transaction fees to a minimum.
              </p>
              <h1>
                After completion of the private & public sale, Gamesta will
                allocate capital into in-game assets and begin development work
                on the infrastructure of the ecosystem
                <strong>
                  $GSG will enable holders to be rewarded, players to be
                  incentivized, and the treasury funded, via our unique smart
                  contract system of buying back the token with yields
                  generated.
                </strong>
                <a
                  href="https://bit.ly/3jEK7yD"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hover2 spec-btn-link"
                >
                  Explore More in our Whitepaper
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div className="utility-container">
          <div className="utility-wrapper">
            <div className="utility-content">
              <h1 className="title" data-aos="fade-right">
                Utility
              </h1>

              <div className="icon-list2">
                <details data-aos="fade-right">
                  <summary>
                    <div>
                      <span>
                        <img src={DistributingProfits} alt="" />
                      </span>
                      <h3>
                        <strong>Distributing profits to investors</strong>
                      </h3>
                    </div>
                  </summary>
                </details>

                <details data-aos="fade-right">
                  <summary>
                    <div>
                      <span>
                        <img src={Staking} alt="" />
                      </span>
                      <h3>
                        <strong>Staking</strong>
                      </h3>
                    </div>
                  </summary>
                </details>

                <details data-aos="fade-right">
                  <summary>
                    <div>
                      <span>
                        <img src={Governance} alt="" />
                      </span>

                      <h3>
                        <strong>
                          Governance + key decisions voted on in the DAO
                        </strong>
                      </h3>
                    </div>
                  </summary>
                </details>

                <details data-aos="fade-right">
                  <summary>
                    <div>
                      <span>
                        <img src={Further} alt="" />
                      </span>
                      <h3>
                        <strong>
                          Further fund raising for asset acquisition if deemed
                          necessary
                        </strong>
                      </h3>
                    </div>
                  </summary>
                </details>

                <details data-aos="fade-right">
                  <summary>
                    <div>
                      <span>
                        <img src={Community} alt="" />
                      </span>
                      <h3>
                        <strong>Community activation and incentives</strong>
                      </h3>
                    </div>
                  </summary>
                </details>
              </div>
            </div>
            <div className="chart-inner-wrapper" style={{ marginTop: `5rem` }}>
              <div className="utility-content">
                <h1 className="title" data-aos="fade-left">
                  Derived Value
                </h1>

                <div className="icon-list2">
                  <details data-aos="fade-left">
                    <summary>
                      <div>
                        <span>
                          <img src={Yield} alt="" />
                        </span>
                        <h3>
                          <strong>
                            Yield gained from assets acquired by Treasury
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-left">
                    <summary>
                      <div>
                        <span>
                          <img src={ProfitsProduced} alt="" />
                        </span>
                        <h3>
                          <strong>
                            Profits produced from active play of virtual assets
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-left">
                    <summary>
                      <div>
                        <span>
                          <img src={Persentage} alt="" />
                        </span>

                        <h3>
                          <strong>% of APY generated from farming</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-left">
                    <summary>
                      <div>
                        <span>
                          <img src={Rewards} alt="" />
                        </span>
                        <h3>
                          <strong>
                            Rewards generated from subscription fees
                          </strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <details data-aos="fade-left">
                    <summary>
                      <div>
                        <span>
                          <img src={Sponsorships} alt="" />
                        </span>
                        <h3>
                          <strong>Rewards generated from sponsorships</strong>
                        </h3>
                      </div>
                    </summary>
                  </details>

                  <p className="sub-des sm-fonts" data-aos="fade-left">
                    Additional value to be added in future…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Controller>
  );
};

export default EcoSystem;