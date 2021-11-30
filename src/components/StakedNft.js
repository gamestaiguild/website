import React, { useEffect, useState } from "react";
import card2 from "../assets/card2.png";

const StakedNft = () => {
  const [expandSection, setExpandSection] = useState(true);
  return (
    <div className="content-container">
      <div>
        <div className="account-header">
          <div className="account-header-intro">
            <ul className="some-list" style={{ marginTop: 40 }}>
              <li className="some-list-item">
                <div className="account-header">
                  <div className="account-header-intro">
                    <div className="section-text">
                      <p>
                        Staked NFTs
                        <div className="tooltipCSS">
                          <svg
                            className="tooltipCSS"
                            width="24"
                            height="27"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 5.04603C7.58172 5.04603 4 8.91131 4 13.6794C4 18.4474 7.58172 22.3127 12 22.3127C16.4183 22.3127 20 18.4474 20 13.6794C20 8.91131 16.4183 5.04603 12 5.04603ZM2 13.6794C2 7.71929 6.47715 2.8877 12 2.8877C17.5228 2.8877 22 7.71929 22 13.6794C22 19.6394 17.5228 24.471 12 24.471C6.47715 24.471 2 19.6394 2 13.6794Z"
                              fill="#B0B0B0"
                              fill-opacity="0.5"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 11.521C12.5523 11.521 13 12.0042 13 12.6002V19.0752C13 19.6712 12.5523 20.1544 12 20.1544C11.4477 20.1544 11 19.6712 11 19.0752V12.6002C11 12.0042 11.4477 11.521 12 11.521Z"
                              fill="#B0B0B0"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M13.5 8.82311C13.5 9.71713 12.8284 10.4419 12 10.4419C11.1716 10.4419 10.5 9.71713 10.5 8.82311C10.5 7.9291 11.1716 7.20436 12 7.20436C12.8284 7.20436 13.5 7.9291 13.5 8.82311Z"
                              fill="#B0B0B0"
                              fill-opacity="0.5"
                            />
                          </svg>
                          <span className="tooltiptext tooltipRight">
                            Here you’ll be able to: See the current staked nft,
                            and also able to unlock & lock the selected nft
                          </span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="account-header-actions">
            <span>
              <label
                for="toggle"
                style={{ zIndex: 100 }}
                onClick={() => {
                  setExpandSection(!expandSection);
                }}
              >
                {!expandSection ? "See all" : "Show Less"}
              </label>
            </span>
          </div>
        </div>
      </div>
      <input id="toggle" type="checkbox" checked={expandSection} />

      <div id="expand">
        <div className="content-main">
          <div className="collection-list">
            <div className="stake-card">
              <div className="block">
                <div className="img-wrapper locked">
                  <img className="img-responsive" src={card2} />
                  <div className="img-overlay">
                    <button type="button" className="locked-btn">
                      <p>Locked</p>
                    </button>
                  </div>
                </div>

                <div className="lock-details">
                  <button type="submit" className="withdraw-btn">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakedNft;
