import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import samProfile from "../../assets/sam.png";
import sunProfile from "../../assets/sun.png";
import maxProfile from "../../assets/max.png";
import willyProfile from "../../assets/willy.png";

const Advisors = () => {
  return (
    <Controller>
      <div className="advisors-hero" style={{ maxWidth: `90%`, marginTop: 50 }}>
        <div className="title">Advisors</div>
        <div className="advisors-grid">
          <article className="advisors-card">
            <article className="card-clickable">
              <figure>
                <Scene triggerHook="onEnter" duration={800}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(90deg)",
                              transformOrigin: "top left",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                            },
                          }}
                        >
                          <img src={samProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Sam Maz</h4>
                <strong>Vespertine Capital</strong>
                <p>
                  Master Nomad holds a Ph.D. and currently works as a senior
                  data scientist, having honed an expertise in AI and
                  machine-learning techniques across numerous industries,
                  including healthcare, regulatory services, and M&A investment
                  banking. He is also an experienced crypto advisor who has
                  gained trust and established relationships with numerous
                  entities across the crypto landscape.
                </p>
              </main>
            </article>
          </article>
          <article className="advisors-card">
            <article className="card-clickable">
              <figure>
                <Scene triggerHook="onEnter" duration={800}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(90deg)",
                              transformOrigin: "top right",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                            },
                          }}
                        >
                          <img src={sunProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Sundeep</h4>
                <strong>Trustswap</strong>
                <p>
                  Core Team Member of TrustSwap. Designed tokenomics for various
                  projects and/or serving as a strategic advisor/consultant for
                  multiple projects spanning across DeFi and GameFi like QANX,
                  BlockBank, LedgerScore, Carbon, ISPOLINK, Fidira, Sekuritance,
                  Oneto11, etc. Has a professional background in Engineering
                  with multiple graduate degrees. Has 5+ years experience in the
                  cryptocurrency space.
                </p>
              </main>
            </article>
          </article>
          <article className="advisors-card">
            <article className="card-clickable">
              <figure>
                <Scene triggerHook="onEnter" duration={800}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(90deg)",
                              transformOrigin: "top left",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                            },
                          }}
                        >
                          <img src={maxProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Max Dier</h4>
                <strong>Gamestation</strong>
                <p>
                  Maximilian Dier is skilled at discovering and scrutinizing
                  long-term investment opportunities in the cryptocurrency
                  industry. He has sourced tens of millions in fundraising,
                  helping launch the biggest projects in the space. He has grown
                  a reputation for being honest and hard-working and a
                  dependable friend to countless projects.
                </p>
              </main>
            </article>
          </article>
          <article className="advisors-card">
            <article className="card-clickable">
              <figure>
                <Scene triggerHook="onEnter" duration={800}>
                  {(progress) => (
                    <div className="">
                      <Timeline totalProgress={progress} paused>
                        <Tween
                          from={{
                            css: {
                              opacity: 0,
                              scale: 3,
                              transform: "rotate(90deg)",
                              transformOrigin: "top right",
                            },
                          }}
                          to={{
                            css: {
                              opacity: 1,
                              scale: 1,
                              transform: "rotate(0deg)",
                            },
                          }}
                        >
                          <img src={willyProfile} alt="" />
                        </Tween>
                      </Timeline>
                    </div>
                  )}
                </Scene>
              </figure>
              <main>
                <h4>Willy</h4>
                <strong>Equinox</strong>
                <p>
                  CEO of Equinox. Willy is more than 10 years an experienced
                  Chief Executive Officer. Entrepreneur in the field of
                  blockchain and cryptocurrency since 2011, Fund Manager at
                  Cryptokerr VC (now Equinox VC Studio) and Advisor and Investor
                  involved in launching over 80 projects in the space.
                </p>
              </main>
            </article>
          </article>
        </div>
      </div>
    </Controller>
  );
};

export default Advisors;
