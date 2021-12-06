import React from "react";

import gamestaBig from "../../assets/blog/logo.png";
import One from "../../assets/gamestaBlog.png";
import Two from "../../assets/gamestaBlog2.png";
import Three from "../../assets/gamestaBlog3.png";
import twitterBox from "../../assets/twitterBox.svg";
import discordBox from "../../assets/discordBox.svg";
import telegramBox from "../../assets/telegramBox.svg";

import { Controller,
  //  Scene 
  } from "react-scrollmagic";
// import { Tween, Timeline } from "react-gsap";
import styled from "styled-components";

const ScrollStyled = styled.div`
  .sticky {
    width: 100%;
    position: relative;
    z-index: 1000;

    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;

      .home-content {
        position: absolute;
      }
      img {
        position: relative;
      }
    }
  }
`;

const Blog = (props) => {
  return (
    <ScrollStyled>
      <Controller>
        <div style={{ background: "white", width: "100%", height: "100%" }}>
          <div style={{ height: 100 }}></div>
          <div className="blog-skew-hero">
            <div className="blog-grid">
              <article className="blog-box" style={{ alignItems: "start" }}>
                <img src={gamestaBig} alt="" />
              </article>
            </div>
            <div className="blog-skew-content">
              <div className="blog-inline-box">
                <div className="blog-card blog-card-blog">
                  <div className="blog-card-image">
                    <a href="#">
                      {/* <Scene
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
                                    scale: 5,
                                  },
                                }}
                                to={{
                                  css: {
                                    opacity: 1,
                                    scale: 1,
                                  },
                                }}
                              >
                                <img className="img" src={One} alt="" />
                              </Tween>
                            </Timeline>
                          </div>
                        )}
                      </Scene> */}
                      <img className="img" src={One} alt="" />
                    </a>
                    <div className="ripple-cont"></div>
                  </div>
                  <div className="blog-table">
                    <h4 className="blog-card-caption">
                      <a href="#">Introducing Gamesta — A.I. Powered Guild</a>
                    </h4>

                    <h6 className="blog-category ">4 days ago</h6>
                    <p className="blog-card-description">
                      Gamesta Guild believes the value of any game is created by
                      the network of players playing it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-inline-box">
                <div className="blog-card blog-card-blog">
                  <div className="blog-card-image">
                    <a href="#">
                      {/* <Scene
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
                                    scale: 5,
                                  },
                                }}
                                to={{
                                  css: {
                                    opacity: 1,
                                    scale: 1,
                                  },
                                }}
                              > */}
                                <img className="img" src={Two} alt="" />
                              {/* </Tween>
                            </Timeline> */}
                          {/* </div> */}
                        {/* )}
                      </Scene> */}
                    </a>
                    <div className="ripple-cont"></div>
                  </div>
                  <div className="blog-table">
                    <h4 className="blog-card-caption">
                      <a href="#">
                        Gamesta, A.I. powered Game-Fi guild announce private
                        round sale
                      </a>
                    </h4>

                    <h6 className="blog-category ">4 days ago</h6>
                    <p className="blog-card-description">
                      Vous Media Group to launch A.I. Powered Game-Fi Guild;
                      GAMESTA. Private round sale has commenced.
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-inline-box">
                <div className="blog-card blog-card-blog">
                  <div className="blog-card-image">
                    <a href="#">
                      {/* <Scene
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
                                    scale: 5,
                                  },
                                }}
                                to={{
                                  css: {
                                    opacity: 1,
                                    scale: 1,
                                  },
                                }}
                              > */}
                                <img className="img" src={Three} alt="" />
                              {/* </Tween>
                            </Timeline>
                          </div>
                        )}
                      </Scene> */}
                    </a>
                    <div className="ripple-cont"></div>
                  </div>
                  <div className="blog-table">
                    <h4 className="blog-card-caption">
                      <a href="#">
                        Gamesta, A.I. powered Game-Fi guild partner with Legion
                        Ventures
                      </a>
                    </h4>

                    <h6 className="blog-category ">4 days ago</h6>
                    <p className="blog-card-description">
                      Gamesta ally with Venture Capitalist, ‘Meme-Masters’,
                      Legion Ventures for marketing and community support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="contactus" className="footer-hero">
              <h2 className="footer-border-text">
                <div className="blog-link">
                  {/* <Scene
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
                                scale: 5,
                              },
                            }}
                            to={{
                              css: {
                                opacity: 1,
                                scale: 1,
                              },
                            }}
                          > */}
                            <div className="">
                              <a
                                href="https://twitter.com/gamestaguild"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="twitterBox"
                                  src={twitterBox}
                                  alt=""
                                />
                              </a>
                            </div>
                          {/* </Tween>
                        </Timeline> */}
                        {/* <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{
                              css: {
                                opacity: 0,
                                scale: 5,
                              },
                            }}
                            to={{
                              css: {
                                opacity: 1,
                                scale: 1,
                              },
                            }}
                          > */}
                            <div className="join-community">Join our community</div>
                          {/* </Tween>
                        </Timeline> */}
                        <a
                          href="https://discord.gg/gamestaguild"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  opacity: 0,
                                  scale: 5,
                                  position: "relative",
                                },
                              }}
                              to={{
                                css: {
                                  position: "relative",
                                  opacity: 1,
                                  scale: 1,
                                },
                              }}
                            > */}
                              <img
                                className="discordBox"
                                src={discordBox}
                                alt=""
                              />
                            {/* </Tween>
                          </Timeline> */}
                        </a>
                        <a
                          href="https://t.me/gamestaguild"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* <Timeline totalProgress={progress} paused>
                            <Tween
                              from={{
                                css: {
                                  opacity: 0,
                                  scale: 5,
                                },
                              }}
                              to={{
                                css: {
                                  opacity: 1,
                                  scale: 1,
                                },
                              }}
                            > */}
                              <img
                                className="teleBox"
                                src={telegramBox}
                                alt=""
                              />
                            {/* </Tween>
                          </Timeline> */}
                        </a>
                      {/* </div> */}
                    {/* )}
                  </Scene> */}
                </div>
              </h2>
            </div>

            {/* //footer */}
          </div>
        </div>
      </Controller>
    </ScrollStyled>
  );
};

export default Blog;
