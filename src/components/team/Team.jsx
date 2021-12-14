import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import spencerProfile from "../../assets/spencer_taring.png";
import davidProfile from "../../assets/david.png";
import jodyProfile from "../../assets/jody.jpg";
import tomasProfile from "../../assets/tomas.png";
import jamesProfile from "../../assets/jamesProfile.jpg";
import AlexProfile from "../../assets/AlexProfile.jpg";
import sanjayProfile from "../../assets/sanjayProfile.jpeg";
import linkedInIcon from "../../assets/linkedin.png";
import "../../styles/teams.scss";

const Team = () => {
  return (
    <Controller>
      <div
        id="team"
        className="light-gradient"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="masonry-container">
          <section className="masonry-grid">
            <article className="card-clickable">
              <main>
                <h1>Gamesta Team</h1>
              </main>
              <figure>
                <Scene triggerHook="onEnter" duration={600}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(320deg)",
                              marginLeft: "-500px",
                              marginTop: "0px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(360deg)",
                              marginLeft: 0,
                              marginTop: "0px",
                            },
                          }}
                        >
                          <img src={jodyProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Jody Taylor</h4>
                <strong>COO</strong>
                <span className="linkedin-link">
                  <a
                    href="https://www.linkedin.com/in/jodyjtaylor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                Chief Operating Officer Jody Taylor brings a world of experience and intuitive skills to the  G A M E  S T A group. Strength in strategic planning and a strong compulsion to create working solutions in all aspects of operations are well characterized by years of strategy consulting, change management and custom operational architectures. Though Jody is an avid investor in private companies, he is no stranger to the power of blockchain technologies and their influential potential over the entertainment sector.
                </p>
              </main>
            </article>
            <article className="card-clickable">
              <figure>
                <Scene triggerHook="onEnter" duration={600}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                            },
                          }}
                        >
                          <img src={spencerProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Spencer Tarring</h4>
                <strong>CEO</strong>
                <span className="linkedin-link">
                  <a
                    href="https://www.linkedin.com/in/spencer-tarring-b6218220"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                  Founder of VMG & DopeWarz, Spencer comes with a wealth of
                  experience in both startups & crypto, having exited 5+
                  businesses in a 20 year career of entrepreneurship. He also is
                  an internationally renowned DJ and runs a successful youtube
                  channel called Crypto Money Life. A regular guest on Bitboys
                  ATB show, he is well connected within the crypto & influencer
                  community.
                </p>
              </main>
            </article>

            <article className="card-clickable">
              <div style={{ height: 60 }}></div>
              <figure>
                <Scene triggerHook="onEnter" duration={600}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(45deg)",
                              marginRight: "-500px",
                              marginTop: "0px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                              marginRight: 0,
                              marginTop: "0px",
                            },
                          }}
                        >
                          <img src={sanjayProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Sanjay Jadhav</h4>
                <strong>CTO</strong>
                <span className="linkedin-link">
                  <a
                    href="#"
                    // target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                  Sanjay is a serial techpreneur with 20+ years’ expertise in
                  building scalable disruptive products $MMM honing in on
                  Blockchain, AI, AR & Big Data. He is passionate about solving
                  real world problems with a customer-centric approach and
                  excels in developing & leading high performance, collaborative
                  and distributed multicultural teams. He is an avid M&A
                  strategist and crypto trader/investor.
                </p>
              </main>
            </article>

            <article className="card-clickable">
              <div style={{ height: 60 }}></div>
              <figure>
                <Scene triggerHook="onEnter" duration={600}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(45deg)",
                              marginRight: "-500px",
                              marginTop: "0px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                              marginRight: 0,
                              marginTop: "0px",
                            },
                          }}
                        >
                          <img src={jamesProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>James Rodd</h4>
                <strong>CMO</strong>
                <span className="linkedin-link">
                  <a
                    href="https://www.linkedin.com/in/james-rodd-b3b59aa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                James joins GAMESTA with two decades of marketing experience, beginning in international sports and music festivals. This was followed by a period across South East Asia and beyond with the pinnacle of luxury hospitality, Four Seasons, before establishing his lux-brand marketing agency which transitioned into technology and GAMESTA.
                </p>
              </main>
            </article>

            <article
              className="card-clickable"
              style={{ width: 0, height: 0, display: "none" }}
            ></article>

            <article className="card-clickable" style={{ marginTop: "0px" }}>
              <figure>
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
                              transform: "rotate(45deg)",
                              marginRight: "-500px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                              marginRight: "0px",
                            },
                          }}
                        >
                          <img src={davidProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>David Silvester</h4>
                <strong>Head of Research & BD</strong>
                <span className="linkedin-link">
                  <a
                    href="https://www.linkedin.com/in/david-silvester"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                  David has 8 years experience developing and consulting
                  businesses in the global start-up scene. He’s an active crypto
                  trader and VC founder, with a passionate focus on the power of
                  Blockchain to connect, entertain, and solve world problems. He
                  has a wealth of academic and business research experience, a
                  Masters in Service Design (UX/CX), an Oxford University
                  certification in Blockchain development and an MBA.
                </p>
              </main>
            </article>

            <article className="card-clickable">
              <figure>
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
                              transform: "rotate(320deg)",
                              marginRight: "-500px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(360deg)",
                              marginRight: "0px",
                            },
                          }}
                        >
                          <img src={tomasProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Tomas Wolf</h4>
                <strong>Head of Gaming</strong>
                <span className="linkedin-link">
                  <a
                    href="https://www.linkedin.com/in/tom-wolf-962a5697"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                  Tom is an Active Stock, Commodities and Crypto swing trader,
                  financial educator and Angel Investor. Since discovering the
                  potential of crypto gaming he has been utilizing in-game
                  assets and teams of gamers to produce income for themselves,
                  and a great return for investors, operating a team of 100+
                  Indonesians in Bali.
                </p>
              </main>
            </article>
            <article className="card-clickable">
              <figure>
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
                              transform: "rotate(45deg)",
                              marginRight: "-500px",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                              marginRight: "0px",
                            },
                          }}
                        >
                          <img src={AlexProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Aleksandar Loncar</h4>
                <strong>Head of AI</strong>
                <span className="linkedin-link">
                  <a
                    href="https://www.linkedin.com/in/aleksandar-loncar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedInIcon} alt="" />
                  </a>
                </span>
                <p>
                  Aleksandar is a machine learning engineer, a passionate
                  mathematician and algorithm engineer with strong analytical
                  and problem-solving skills. He started as a software engineer
                  and, over the years, found himself in the data science field,
                  especially in deep learning and AI.
                </p>
              </main>
            </article>

            {/* <article className="card-clickable"></article>
            <article className="card-clickable"></article>
            <article className="card-clickable"></article> */}
          </section>
        </div>
      </div>
    </Controller>
  );
};

export default Team;
