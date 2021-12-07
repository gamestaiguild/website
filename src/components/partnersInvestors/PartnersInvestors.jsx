import equLogo from "../../assets/equ.png";
import oxBullLogo from "../../assets/oxbull.png";
import dopeWarzIcon from "../../assets/dopeWarz.png";
import gameStnIcon from "../../assets/gamestn.png";
import novLogo from "../../assets/nov.png";
import vmgLogo from "../../assets/vmg.png";
import critIcon from "../../assets/crit.png";
import ghafIcon from "../../assets/ghaf.png";
import MCVLogo from "../../assets/MCV_Logo.png";
import legionIcon from "../../assets/legion.png";
import lpiIcon from "../../assets/lpi.png";
import bluewheelIcon from "../../assets/bluewheel.png";
import bcaIcon from "../../assets/bca.png";
import grizzlyCapitallogo from "../../assets/grizzlyCapitallogo.png"
import brotherIcon from "../../assets/brother.png";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const PartnersInvestors = () => {
  return (
    <Controller>
      <div
        id="partnership"
        className="investors-hero"
        style={{ maxWidth: `90%`, marginTop: 50 }}
      >
        <Scene triggerHook="onEnter" duration={800}>
          {(progress) => (
            <div className="">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{
                    css: {
                      opacity: 0,
                      scale: 0,
                      transform: "rotate(330deg)",
                    },
                  }}
                  to={{
                    css: {
                      opacity: 1,
                      scale: 1,
                      transform: "rotate(360deg)",
                    },
                  }}
                >
                  <div className="title">Partners & Investors</div>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>

        <div className="investors-grid">
          <article className="investors-card">
            <figure>
              <img src={dopeWarzIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={gameStnIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={vmgLogo} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={equLogo} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={oxBullLogo} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={novLogo} alt="" />
            </figure>
          </article>

          {/* //2 */}
          <article className="investors-card">
            <figure>
              <img src={critIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={ghafIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={legionIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={lpiIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={bluewheelIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={bcaIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={brotherIcon} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={MCVLogo} alt="" />
            </figure>
          </article>
          <article className="investors-card">
            <figure>
              <img src={grizzlyCapitallogo} alt="" />
            </figure>
          </article>
        </div>
      </div>
    </Controller>
  );
};

export default PartnersInvestors;
