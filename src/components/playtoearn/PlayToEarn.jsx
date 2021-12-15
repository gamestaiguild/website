import React from "react";
import "../../styles/pte.scss";

import nftIcon from "../../assets/nft.png";
import tokenIcon from "../../assets/token.png";
import gameIcon from "../../assets/gameControl.png";
import pieIcon from "../../assets/pie.png";
import farmIcon from "../../assets/farmerWorld.png";
import axie from "../../assets/axie.png";
import atlas from "../../assets/atlas.png";
import cryptoBladesIcon from "../../assets/cryptoBlades.png";
import plantIcon from "../../assets/planet.png";
import forestKnight from "../../assets/forestKnight.png";
import dopeWarzIcon from "../../assets/dopeWarz.png";
import splinterlandsIcon from "../../assets/splinterlands.png";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const PlayToEarn = () => {
  return (
    <div id="play2earn" className="pte-conatiner">
      <Controller>
        <div>
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
                        <p className="pte-header-title">Play 2 Earn </p>
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
                        <p className="pte-header-des">Play 2 Earn </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </div>
          <div className="pte hero">
            <div className="pte-content inner">
              <div>
                <h1>
                  Play to Earn is flipping the gaming industry on its head
                </h1>

                <p
                  // className="pte-content-des"
                  style={{ fontSize: "16px", lineHeight: "20.8px" }}
                >
                  With the introduction of blockchain technology and the
                  abilityto create <br />
                  trustless networks, gaming developers are now able to reward
                  the players for their active gaming performance and
                  incentivise <br />
                  the players that make up the core value of the game.
                </p>
              </div>
            </div>
          </div>
          <div className="pte-nav card-hero">
            <div className="pte-grid card-wrapper">
              <div className="pte-card">
                <div className="pte-card-header">
                  <div>
                    <span>
                      <img src={nftIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="pte-card-body">
                  <div className="pte-card-content">
                    <h4 className="pte-card-title">NFT’s</h4>
                    <p>
                      In-game asset ownership through the use of NFT’s provides
                      additional value to the players when the in-game asset is
                      used within the game world by playing an active role in
                      the game itself.
                      <br />
                      <br />
                      As players increase the XP of an in-game asset by playing,
                      its value increases, meaning players are incentivized to
                      spend time in the game to boost, cashing out by selling
                      their in-game assets and possibly resell them whenever
                      they wish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pte-card">
                <div className="pte-card-header">
                  <div>
                    <span>
                      <img src={tokenIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="pte-card-body">
                  <div className="pte-card-content">
                    <h4 className="pte-card-title">Token Dynamics</h4>
                    <p>
                      The play 2 earn model enables game developers to create
                      value in unique tokens associated with the game.
                      <br />
                      <br />
                      These tokens provide utility, and therefore new ways to
                      engage with the game and trade in-game assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pte-card">
                <div className="pte-card-header">
                  <div>
                    <span>
                      <img src={gameIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="pte-card-body">
                  <div className="pte-card-content">
                    <h4 className="pte-card-title">Empowerment</h4>
                    <p>
                      Play 2 Earn is revolutionary as it debases the value of a
                      player's time regardless of their means, wealth and
                      location. All players are equal.
                      <br />
                      <br />
                      That means players from under-privileged countries such as
                      Vietnam, Philippines, & Thailand can make relatively high
                      full time incomes from actively playing the games.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pte-card">
                <div className="pte-card-header">
                  <div>
                    <span>
                      <img src={pieIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="pte-card-body">
                  <div className="pte-card-content">
                    <h4 className="pte-card-title">Scholarships</h4>
                    <p>
                      Due to the play 2 earn models’ effectiveness, the prices
                      of the NFTs linked to the in-game assets required to play
                      may be significantly high, meaning barriers of entry exist
                      for those with no money to purchase such NFT.
                      <br />
                      <br />
                      Scholarships such as Gamesta’s enable the distribution of
                      these in-game assets to players that can use them in game
                      in exchange for a profit sharing model. This sharing is a
                      consequence of the active gaming performance of the
                      players.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pte-game game-section">
            <ul className="pte-game-header">
              <h6 className="pte-game-title">Play 2 Earn Games</h6>
            </ul>
            <ul className="pte-game-list game-list">
              <li className="pte-game-list-item game-list-item">
                <img src={axie} alt="" />
              </li>
              <li className="pte-game-list-item game-list-item">
                <img src={atlas} alt="" />
              </li>

              <li className="pte-game-list-item game-list-item">
                <img src={cryptoBladesIcon} alt="" />
              </li>

              <li className="pte-game-list-item game-list-item">
                <img src={plantIcon} alt="" />
              </li>

              <li className="pte-game-list-item game-list-item">
                <img src={farmIcon} alt="" />
              </li>

              <li className="pte-game-list-item game-list-item">
                <img src={forestKnight} alt="" />
              </li>
              <li className="pte-game-list-item game-list-item">
                <img src={dopeWarzIcon} alt="" />
              </li>

              <li className="pte-game-list-item game-list-item">
                <img src={splinterlandsIcon} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </Controller>
    </div>
  );
};

export default PlayToEarn;
