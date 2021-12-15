import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const ValueProposition = () => {
  return (
    <Controller>
      <div className="carousel-hero">
        <div className="inner">
          <div>
            <Scene triggerHook="onEnter" duration={800}>
              {(progress) => (
                <div className="">
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          opacity: 0,
                          scale: 0,
                        }
                      }}
                      to={{
                        css: {
                          opacity: 1,
                          scale: 1,
                        }
                      }}
                    >
                      <h1>
                        Value
                        <br />
                        <span style={{ marginLeft: `80px` }}>Proposition</span>
                      </h1>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
            <span className="carousel-hero-border"></span>
            <p>
              The guild effectively connects token holders and players together,
              enabling both parties to profit from the exploding play-to-earn model.
            </p>
            <strong>
              Gamesta brings value through its experience in the industry.
              Specialists in crypto and more prudently GameFi, Gamesta’s core team
              are looking forward to building one of the most successful guilds
              ever, one that gives high rewards to token holders but at the same time
              empowers players from all over the globe.
            </strong>
          </div>
        </div>

        {/* //logo */}
      </div>
    </Controller>
  );
};

export default ValueProposition;
