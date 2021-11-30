import Tenfold from "../../assets/Frame76.png";
import InsideInformation from "../../assets/Frame77.png";
import BetaTestGames from "../../assets/Frame78.png";
import GamestaVIP from "../../assets/Frame79.png";
import IDOPlatforms from "../../assets/Frame80.png";
import MetaverseGallery from "../../assets/Frame81.png";
import hand from "../../assets/card-with-hand.png";
import "../../styles/blackcard.scss";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import icoHeader from "../../assets/head-black.png";


const BlackGamexCard = () => {
  return (
    <div className="spec-card-black-container">
      <Controller>
        <div style={{ background: "white", width: "100%", height: "100%" }}>
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
                        scale: 1,
                        transform: "rotate(90deg)",
                        transformOrigin: "0 0",
                      },
                    }}
                    to={{
                      css: {
                        scale: 1,
                        transform: "rotate(360deg)",
                      },
                    }}
                  >
                    <div className="">
                      <img className="black-header" src={icoHeader} alt="" />
                    </div>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>

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
                        scale: 1,
                        transform: "rotate(270deg)",
                        transformOrigin: "top right",
                      },
                    }}
                    to={{
                      css: {
                        scale: 1,
                        transform: "rotate(360deg)",
                      },
                    }}
                  >
                    <div className="black-skew-hero">
                      <div className="text-grid">
                        <article
                          className="text-box text1"
                          style={{ alignItems: "end" }}
                          data-aos="zoom-out-up"
                        >
                          Black
                        </article>
                        <article className="text-box text2">GAMEX </article>
                        <article
                          className="text-box text3"
                          style={{ alignItems: "start" }}
                          data-aos="zoom-out-up"
                        >
                          CARD
                        </article>
                      </div>
                      <div className="black-skew-content">
                        <div className="inline-box">
                          <div className="icon-list2" data-aos="zoom-out-up">
                            <strong>
                              Alongside ownership and staking of{" "}
                              <span>$GSG</span>, VIPs will be able to purchase
                              limited edition NFT, which will entitle them to a
                              range of benefits, including but not limited to:
                            </strong>
                            <details>
                              <summary>
                                <div>
                                  <span>
                                    <img src={Tenfold} alt="" />
                                  </span>
                                  <h3>
                                    <strong data-aos="zoom-out-up">
                                      Tenfold Increased voting weight in The DAO
                                    </strong>
                                  </h3>
                                </div>
                              </summary>
                            </details>

                            <details data-aos="zoom-out-up">
                              <summary>
                                <div>
                                  <span>
                                    <img src={InsideInformation} alt="" />
                                  </span>
                                  <h3>
                                    <strong>
                                      Access to ‘inside information’ on upcoming
                                      sales and events procured by our team of
                                      researchers and network of partnerships
                                    </strong>
                                  </h3>
                                </div>
                              </summary>
                            </details>

                            <details>
                              <summary>
                                <div>
                                  <span>
                                    <img
                                      src={BetaTestGames}
                                      alt=""
                                      data-aos="zoom-in"
                                    />
                                  </span>

                                  <h3>
                                    <strong data-aos="zoom-in">
                                      Access to beta test games
                                    </strong>
                                  </h3>
                                </div>
                              </summary>
                            </details>

                            <details data-aos="zoom-in">
                              <summary>
                                <div>
                                  <span>
                                    <img src={GamestaVIP} alt="" />
                                  </span>
                                  <h3>
                                    <strong>
                                      Access to Gamesta VIP Real World Events
                                    </strong>
                                  </h3>
                                </div>
                              </summary>
                            </details>

                            <details data-aos="zoom-in">
                              <summary>
                                <div>
                                  <span>
                                    <img src={IDOPlatforms} alt="" />
                                  </span>
                                  <h3>
                                    <strong>
                                      Access to early stage private round
                                      allocations through our network of
                                      launchpads and IDO platforms
                                    </strong>
                                  </h3>
                                </div>
                              </summary>
                            </details>

                            <details data-aos="zoom-in">
                              <summary>
                                <div>
                                  <span>
                                    <img src={MetaverseGallery} alt="" />
                                  </span>

                                  <h3>
                                    <strong>
                                      Early access to our Gamesta Metaverse
                                      Gallery
                                    </strong>
                                  </h3>
                                </div>
                              </summary>
                            </details>
                          </div>
                        </div>
                        <div className="inline-box">
                          <img src={hand} alt="" data-aos="zoom-in" />
                        </div>
                        {/* <img src={Rectangle} /> */}
                        <div className="inline-box">
                          <div>
                            <p>
                              GAMEX Black Card NFT's are coming to market in
                              Dec, likely pricing circa $20,000
                            </p>
                            <a
                              href="https://bit.ly/gamexcard"
                              target="_blank"
                              rel="noreferrer"
                              className="btn-hover"
                            >
                              Apply now
                            </a>
                          </div>
                        </div>
                      </div>
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

export default BlackGamexCard;
