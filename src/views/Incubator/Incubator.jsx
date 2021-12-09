import React, { useEffect } from "react";
import BlackGamexCard from "../../components/blackGamexCard";
import "../../styles/icubator.scss";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import IndicatorPagination from "../../components/innerpage-pagination/IndicatorPagination";
import ProjectsList from "../../components/project/ProjectsList";
import { projectItemList } from "./projectItemList";
import incubatorImage from "../../assets/project/incubator.png";

const Incubator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <div className="page-wrapper">
      <div
        className="main-incubator-image"
        style={{ backgroundImage: `url(${incubatorImage})` }}
      >
        <div className="incubator-image-container">
          <IndicatorPagination title="Incubator" />
          <div className="pagination-title-wrapper">
            <h1>Incubator</h1>
          </div>
        </div>
      </div>

      <div className="tabs-wrapper">
        <div className="tabs">
          <ul className="tab-list">
            <li className="active">Description</li>
            <li>Projects [{projectItemList.length}]</li>
          </ul>
          <div className="tab-content">
            <ul>
              <li className="tab-content-list incubator-tab-content">
                <div className="tab-content-left">
                  <span>01</span>
                  <h2>What We Do</h2>
                </div>
                <div className="tab-content-right">
                  <h4>
                    Gamesta brings value through its experience in the industry.
                    Specialists in crypto and more prudently GameFi, GAMESTA’s
                    core team are looking forward to building one of the most
                    successful guilds ever, one that gives high yields to
                    investors but at the same time empowers players from all
                    over the globe.
                  </h4>
                  <p>
                    Through our previous successes, connections, and experience
                    in Crypto Projects, we are able to add a unique set of value
                    add propositions to projects that we incubate.
                  </p>
                </div>
              </li>

              <li className="tab-content-list">
                <div className="tab-content-left">
                  <span>02</span>
                  <h2>Strategic & Value Add Investor Network </h2>
                </div>
                <div className="tab-content-right">
                  <h4>
                    Gamesta works with a wide range of VC’s in the space, with
                    the majority of them already invested into the $GSG token &
                    ecosystem.
                  </h4>
                  <p>
                    We link our incubation projects with these investors
                    enabling you to quickly establish a Cap Table of
                    significance.
                  </p>
                </div>
              </li>

              <li className="tab-content-list">
                <div className="tab-content-left">
                  <span>03</span>
                  <h2>Direct Investment</h2>
                </div>
                <div className="tab-content-right">
                  <h4>
                    We put our money where our mouth is. Any project we
                    incubate, we will also invest in.
                  </h4>
                </div>
              </li>

              <li className="tab-content-list">
                <div className="tab-content-left">
                  <span>04</span>
                  <h2>GAMESTA Marketing Division</h2>
                </div>
                <div className="tab-content-right">
                  <h4>
                    Using our experience and know how, we can activate our
                    GAMESTA Marketing team to assist your project, either on a
                    passive approach or a fully fledged marketing strategy
                    (chargeable), including:
                  </h4>
                  <ul className="list">
                    <li>Influencer Management & Allocations</li>
                    <li>Content Creation (Creative Articles, Video)</li>
                    <li>Community Management</li>
                    <li>Social Media Management</li>
                    <li>Gleam & Telegram BOT Competitions</li>
                  </ul>
                </div>
              </li>

              <li className="tab-content-list">
                <div className="tab-content-left">
                  <span>05</span>
                  <h2>Brand Association</h2>
                </div>
                <div className="tab-content-right">
                  <h4>
                    Gamesta is quickly becoming a behemoth in the crypto
                    industry.
                  </h4>
                  <p>
                    Driven by CEO Spencer Tarring’s business accomplishments and
                    experience, any project we associate with immediately gets
                    an uplift in credibility.
                  </p>
                </div>
              </li>

              <li className="tab-content-list">
                <div className="tab-content-left">
                  <span>06</span>
                  <h2>CEX, DEX & Launchpad Introductions</h2>
                </div>
                <div className="tab-content-right">
                  <h4>
                    We have connections to all major Launchpads, CEXs & DEX’s,
                    and will recommend Market Makers for your treasury to ensure
                    a successful and profitable business strategy.
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-section">
        <Controller>
          <div className="pte-header">
            <Scene
              triggerHook="onEnter"
              duration={800}
              // pin
            >
              {(progress) => (
                <div className="sticky">
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          position: "absolute",
                          marginLeft: "-500px",
                          opacity: 0,
                          scale: 1,
                        },
                      }}
                      to={{
                        css: {
                          position: "absolute",
                          marginLeft: "0px",
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                    >
                      <div className="animation">
                        <p className="pte-header-title">PROJECT </p>
                      </div>
                    </Tween>
                  </Timeline>

                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{
                        css: {
                          position: "absolute",
                          opacity: 0,
                          scale: 0,
                        },
                      }}
                      to={{
                        css: {
                          position: "absolute",
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                    >
                      <div className="animation">
                        <p className="pte-header-des">PROJECT </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </div>
        </Controller>

        <div className="project-box-wrapper incubator-project-wrapper">
          {projectItemList.map((item, index) => (
            <ProjectsList
              key={index}
              img={item.project_img}
              projectName={item.project_name}
              projectContent={item.project_content}
              projectId={item.id}
              isComingSoon={item.isComingSoon}
            />
          ))}
        </div>
      </div>
      <BlackGamexCard
        extraText={"Any project incubated by GAMESTA will receive a"}
      />

      <div className="after-black-sec">
        <div className="tab-content">
          <ul>
            <li className="tab-content-list">
              <div className="tab-content-left">
                <span>07</span>
                <h2>Terms & Costs</h2>
              </div>
              <div className="tab-content-right">
                <h4>
                  GAMESTA believes in the long term success of the projects they
                  incubate. We prove this by not only advising, but also
                  investing into projects we incubate. In exchange for the above
                  services we ask for the following:
                </h4>
                <ul className="list">
                  <li>3.0% of token supply</li>
                  <li>5% of total raise in Stable Coin</li>
                  <li>
                    Agreeable additional budget for marketing team, if desired.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Incubator;
