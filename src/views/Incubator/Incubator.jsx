import React from "react";
import BlackGamexCard from "../../components/blackGamexCard";
import "../../styles/icubator.scss";

const Incubator = () => {
  return (

      <div className="page-wrapper">
        <div className="incubator-page-header">
          <div className="container">
            <div className="pagination">
              <ul>
                <li><a href="#">Home</a></li>
                <li class="caret"></li>
                <li>Incubator</li>
              </ul>
            </div>
            <h2 className="pagination-title">Incubator</h2>
          </div>
        </div>
        
        <div className="tabs-wrapper">
          <div className="tabs">
            <ul className="tab-list">
              <li className="active">Description</li>
              <li>Projects [5]</li>
            </ul>
            <div className="tab-content">
                <ul>
                  <li className="tab-content-list">
                      <div className="tab-content-left">
                          <span>01</span>
                          <h2>What We Do</h2>
                      </div>
                      <div className="tab-content-right">
                        <h4>Gamesta brings value through its experience in the industry. Specialists in crypto and more prudently GameFi, VMG’s core team are looking forward to building one of the most successful guilds ever, one that gives high yields to investors but at the same time empowers players from all over the globe.</h4>
                        <p>Through our previous successes, connections, and experience in Crypto Projects, we are able to add a unique set of value add propositions to projects that we incubate.</p>
                      </div>
                  </li>

                  <li className="tab-content-list">
                      <div className="tab-content-left">
                          <span>02</span>
                          <h2>Strategic & Value Add Investor Network </h2>
                      </div>
                      <div className="tab-content-right">
                        <h4>Gamesta works with a wide range of VC’s in the space, with the majority of them already invested into the $GSG token & ecosystem. </h4>
                        <p>We link our incubation projects with these investors enabling you to quickly establish a Cap Table of significance.</p>
                      </div>
                  </li>

                  <li className="tab-content-list">
                      <div className="tab-content-left">
                          <span>03</span>
                          <h2>Direct Investment</h2>
                      </div>
                      <div className="tab-content-right">
                        <h4>We put our money where our mouth is. Any project we incubate, we will also invest in.</h4>
                      </div>
                  </li>

                  <li className="tab-content-list">
                      <div className="tab-content-left">
                          <span>04</span>
                          <h2>VMG Marketing Division</h2>
                      </div>
                      <div className="tab-content-right">
                        <h4>Using our experience and know how, we can activate our VMG Marketing team to assist your project, either on a passive approach or a fully fledged marketing strategy (chargeable), including:</h4>
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
                        <h4>Gamesta is quickly becoming a behemoth in the crypto industry. </h4>
                        <p>Driven by CEO Spencer Tarring’s business accomplishments and experience, any project we associate with immediately gets an uplift in credibility.</p>
                      </div>
                  </li>

                  <li className="tab-content-list">
                      <div className="tab-content-left">
                          <span>06</span>
                          <h2>CEX, DEX & Launchpad Introductions</h2>
                      </div>
                      <div className="tab-content-right">
                        <h4>We have connections to all major Launchpads, CEXs & DEX’s, and will recommend Market Makers for your treasury to ensure a successful and profitable business strategy.</h4>
                      </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <BlackGamexCard />
      </div>
     


    
      
      
      
    
  );
};

export default Incubator;
