import RoadmapCarousel from "../RoadmapCarousel";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const RoadMap = () => {
  return (
    <Controller>
      <div id="road-map" className="roadmap-carousel-hero">
        <div className="roadmap-wrapper">
          <Scene
            triggerHook="onEnter"
            duration={600}
          >
            {(progress) => (
              <div className="">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      css: {
                        opacity: 0,
                        scale: 3,
                        marginTop: "50px",
                      },
                    }}
                    to={{
                      css: {
                        opacity: 1,
                        scale: 1,
                      },
                    }}
                  >
                    <h1>
                      Technical Roadmap
                      <br />
                    </h1>
                  </Tween>
                </Timeline>
              </div>
            )}
          </Scene>
          <div className="roadmap-carousel">
            <RoadmapCarousel />
          </div>
        </div>
        {/* //logo */}
      </div>
    </Controller>
  );
};

export default RoadMap;
