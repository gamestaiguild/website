import React, { useEffect, useState } from "react";
import card from "../assets/card.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const WalletNft = () => {
  const [expandSection2, setExpandSection2] = useState(true);
  return (
    <div className="container">
      <div>
        <div className="account-header">
          <div className="account-header-intro">
            <ul className="some-list" style={{ marginTop: 40 }}>
              <li className="some-list-item">
                <div className="account-header">
                  <div className="account-header-intro">
                    <div className="section-text">
                      <p>
                        NFTs in wallet
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
                            Here you’ll be able to: See all the current Z1 NFT
                            you have in your wallet with pagination
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
                  setExpandSection2(!expandSection2);
                }}
              >
                {!expandSection2 ? "See all" : "Show Less"}
              </label>
            </span>
          </div>
        </div>
      </div>
      <input id="toggle2" type="checkbox" checked={expandSection2} />
      <div id="expand2">
        <div className="content-main">
          <div className="grid-list">
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card2} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card2} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card2} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card2} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card3} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card3} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="block">
                <div className="product">
                  <img src={card3} alt="" />
                </div>

                <div className="details">
                  <button type="submit" className="outline dark-black">
                    <div className="gradient-button-text">
                      <p>
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99996 1.83335C4.90148 1.83335 3.99996 2.79122 3.99996 3.95835V6.08335H9.99996C10.7363 6.08335 11.3333 6.71762 11.3333 7.50002V13.1667C11.3333 13.9491 10.7363 14.5834 9.99996 14.5834H1.99996C1.26358 14.5834 0.666626 13.9491 0.666626 13.1667V7.50002C0.666626 6.71762 1.26358 6.08335 1.99996 6.08335H2.66663V3.95835C2.66663 2.00882 4.1651 0.416687 5.99996 0.416687C7.83482 0.416687 9.33329 2.00882 9.33329 3.95835C9.33329 4.34956 9.03482 4.66669 8.66663 4.66669C8.29844 4.66669 7.99996 4.34956 7.99996 3.95835C7.99996 2.79122 7.09844 1.83335 5.99996 1.83335ZM1.99996 7.50002V13.1667H9.99996V7.50002H1.99996Z"
                            fill="#D8624B"
                          />
                        </svg>
                        Lock Nft To Play
                      </p>
                    </div>
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

export default WalletNft;
