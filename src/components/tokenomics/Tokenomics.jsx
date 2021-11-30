import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Tokenomics = () => {
  return (
    <Controller>
      <div className="token-container">
        <div className="token-content">
          <Scene
            triggerHook="onEnter"
            duration={600}
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
                        transform: "rotate(35deg)",
                      },
                    }}
                    to={{
                      css: {
                        opacity: 1,
                        scale: 1,
                        transform: "rotate(0deg)",
                        marginRight: "15px",
                      },
                    }}
                  >
                    <h1 className="title" style={{ lineHeight: 1.5 }}>
                      Tokenomics
                    </h1>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>

          <p className="des">
            There will be a max supply of &nbsp;
            <span className="des-highlight">1,000,000,000 GSG </span>
            tokens, with <span className="green">14%</span> of them being sold
            in a private & public sale to raise the initial capital to invest
            into in-game assets and build out the platform.
          </p>

          <div style={{ marginTop: 20 }}>
            <Scene
              triggerHook="onEnter"
              duration={600}
              // pin
            >
              {(progress) => (
                <div className="">
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          opacity: 0,
                          scale: 2,
                        },
                      }}
                      to={{
                        css: {
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                    >
                      <strong className="sub-des" style={{ display: "flex" }}>
                        <p>
                          Need more info about Token Distribution, Token Sale,
                          Use of Funds?
                        </p>

                        <a
                          href="https://bit.ly/3jEK7yD"
                          target="_blank"
                          rel="noreferrer"
                          className="btn-hover2 spec-btn-link"
                          style={{ marginLeft: 20, width: 400 }}
                        >
                          Read Whitepaper
                        </a>
                      </strong>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </div>
        </div>

        <div className="numbers-grid">
          <article className="numbers-box" style={{ alignItems: "end" }}>
            <h1 className="title">$760,000</h1>
            <p>Market Cap at IDO</p>
          </article>
          <article className="numbers-box">
            <p>fully diluted value </p>
            <h1 className="title"> $80M</h1>
          </article>
        </div>
      </div>
    </Controller>
  );
};

export default Tokenomics;
