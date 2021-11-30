import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import spencerProfile from "../../assets/spencer_taring.png";
import davidProfile from "../../assets/david.png";
import jodyProfile from "../../assets/jody.jpg";
import tomasProfile from "../../assets/tomas.png";
import belloProfile from "../../assets/bello.png";

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
                <h4>Spencer Taring</h4>
                <strong>CEO</strong>
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
                          <img src={tomasProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Tomas Wolf</h4>
                <strong>COO</strong>
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
            <article
              className="card-clickable"
              style={{ width: 0, height: 0, display: "none" }}
            ></article>
            <article className="card-clickable"></article>
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
                          <img src={belloProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Bello Andreas</h4>
                <strong>CTO</strong>
                <p>
                  Bello has a wealth of experience in coding, with a deep
                  understanding of C ,C++, Javascript, VBA, Java, Python, Rust
                  languages (to name a few). Since 2018 Bello moved his focus
                  into Solidity, PHP, & HTML 5, to follow his vision of creating
                  advanced web3.0 applications integrated with the blockchain.
                  His role in Gamesta is to ensure delivery of the Smart
                  Contracts, Web App, and technical infrastructure for the
                  Guild.
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
                <p>
                  Chief Operating Officer Jody Taylor brings a world of
                  experience and intuitive skills to Vous Media Group. Strength
                  in strategic planning and a strong compulsion to create
                  working solutions in all aspects of operations are well
                  characterized by years of strategy consulting, change
                  management and custom operational architectures. Though Jody
                  is an avid investor in private companies, he is no stranger to
                  the power of blockchain technologies and their influential
                  potential over the entertainment sector. Jody is in the right
                  place to move VMG forward.
                </p>
              </main>
            </article>
            <article className="card-clickable"></article>
            <article className="card-clickable">
              {/* <figure>
                <img src={spencerProfile} alt="" />
              </figure>
              <main>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  convallis sodales erat vel accumsan. Nam eget massa nec sem
                  vulputate ullamcorper vel quis justo. Duis rhoncus tempor
                  tempus. Nulla facilisi. Maecenas nulla ante, lacinia ac
                  consectetur non, aliquet sollicitudin libero. Quisque congue
                  odio sodales dui fermentum ac laoreet mauris eleifend. Nulla
                  facilisi. Phasellus vel erat a ante pharetra pharetra.
                </p>
              </main> */}
            </article>
            <article className="card-clickable"></article>
          </section>
        </div>
      </div>
    </Controller>
  );
};

export default Team;
