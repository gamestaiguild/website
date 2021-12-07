import React, { useEffect, useState } from "react";

const slideWidth = 58;

const _items = [
  {
    player: {
      title: "Phase 1",
      desc: "To optimise our yields and reward the best players with the best assets, we are developing an AI based Machine Learning algorithm to automatically promote and reward scholars in our program.",
      title2: {
        title: "Whitepaper",
        one: "Core team formation",
        two: "Completion of whitepaper"
      },
      title3: {
        title: "Advisors & Partners",
        one: "Key Partnerships formed",
        two: "Strategic investments given allocation in seed round",
      },
      title4: {
        title: "Launchpad & IDO",
        one: "Private Sale Completed",
        two: "IDO on Launchpads 15th Dec",
        three: "Fair Launch Raise on CopperLaunch 16-20th Dec",
        four: "Token Generation Event immediately after",
        five: "Live on DEX & CEX",
      },
      title5: {
        title: "Operations Activated",
        one: "Beta Guild goes live",
        two: "Reporting begins",
      },
      title6: {
        title: "Discord Snapshot",
        one: "Idea from YGG launch",
        two: "Snapshot taken for rewarding early adopters later in community tokens"
      }

    },
  },
  {
    player: {
      title: "Phase 2",
      desc: "A.I. & Machine Learning is revolutionising processes in all aspects of business, in every industry. Gamesta is developing an A.I. & ML based algorithm to assist in asset acquisition decisions. We estimate this will increase the efficiency of our treasury 2-3 fold, and significantly reduce the risks of human errors and sentiment based choices.",
      title2: {
        title: "A.I. Development",
        one: "Data capture and input, data structure development",
        two: "Machine Learning begins, target 2 years to perfect and test"
      },
      title3: {
        title: "Smart Contracts",
        one: "Development of smart contracts to handle GSG ecosystem",
        two: "Launch of web3.0 interface for token holders",
      },
      title4: {
        title: "NFT Acquisition & Deployment",
        one: "In-game assets begin to be acquired",
      },
      title5: {
        title: "Research & Partnerships",
        one: "Added to CEX’s",
        two: "Liquidity unlocked",
      },
      title6: {
        title: "Community Development",
        one: "Rapid expansion of scholarships, target 10,000+ scholars",
        two: "Community marketing & incentive programs"
      }
    },
  },
  {
    player: {
      title: "Phase 3",
      desc: "After an extremely successful partnership between DOPEWARZ & GAMESTATION, VMG decided to again incubate Gamesta with Gamestation. With their wealth of knowledge and large network of value add investors, Gamesta are confident of another incredible partnership. ",
      title2: {
        title: "DAO Begins",
        one: "Decentralisation of tokens matures, DAO launched to govern the direction of Gamesta.",
        two: "Voting systems and web3.0 upgrades to enable governance from token holders"
      },
      title3: {
        title: "Lending",
        one: "Upgraded smart contracts to enable lending to and from the treasuries NFT asset base",
        two: "Other guilds can lend to Gamesta through the smart contracts and vice versa creating a ‘sub-lease’.",
      },
      title4: {
        title: "Staking",
        one: "Staking platforms",
        two: "Strategic investments given allocation in seed round",
      },
      title5: {
        title: "A.I. Implementation",
        one: "Machine Learning algorithms mature, activated in live scenarios",
      }
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 1 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="roadmap-carousel__slide-item" style={item.styles}>
      {/* <div className="roadmap-carouel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div> */}
      <div className="roadmap-carouel-slide-item__body">
        <h4 className="phase-title">{item.player.title}</h4>
        {/* <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p> */}
        <div className="roadmap-grid">
          <article className="roadmap-box">
            <h1 className="title">{item.player.title2?.title}</h1>
            <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title2?.one}</span>
            </p>
            <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title2?.two}</span>

            </p>

            <h1 className="title" style={{ marginTop: 40 }}>
              {item.player?.title5?.title}
            </h1>
            <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title5?.one}</span>
            </p>
           {item.player?.title5.two && <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span> {item.player?.title5?.two}</span>
            </p>}
          </article>
          <article className="roadmap-box">
            <h1 className="title">{item.player?.title3?.title}</h1>
            <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title3?.one}</span>
            </p>
            <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title3?.two}</span>
            </p>
            {item.player?.title6 &&
              <>
                <h1 className="title" style={{ marginTop: 40 }}>
                  {item.player?.title6?.title}
                </h1>
                <p className="des">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                      fill="#00B3E8"
                    />
                  </svg>
                  <span>{item.player?.title6?.one}</span>
                </p>
                <p className="des">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                      fill="#00B3E8"
                    />
                  </svg>
                  <span> {item.player?.title6?.two}</span>
                </p>
              </>}
          </article>
          <article className="roadmap-box">
            <h1 className="title">{item.player?.title4?.title}</h1>
            <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title4?.one}</span>
            </p>
            {item.player?.title4?.two && <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title4?.two}</span>
            </p>}
            {item.player?.title4?.three && <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title4?.three}</span>
            </p>}
            {item.player?.title4?.four && <p className="des">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66649 10.1146L12.7945 3.98596L13.7378 4.92863L6.66649 12L2.42383 7.7573L3.36649 6.81463L6.66649 10.1146Z"
                  fill="#00B3E8"
                />
              </svg>
              <span>{item.player?.title4?.four}</span>
            </p>}
          </article>
        </div>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());
const RoadmapCarousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;
  

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
    return () => {}
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    return () => {}
  }, [items]);

  return (
    <div className="roadmap-carousel__wrap" style={{ marginTop: 0 }}>
      <div className="roadmap-carousel__inner">
        <div className="roadmap-carousel__container">
          <ul className="roadmap-carousel__slide-list" style={{ left: 0 }}>
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <ul className="flex-container flex-end">
          <li className="flex-item">
            <ul className="flex-container space-between">
              <li className="flex-item" onClick={() => prevClick()}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9997 21.6665H33.333V18.3332H19.9997V6.6665L6.66634 19.9998L19.9997 33.3332V21.6665Z"
                    fill={activeIdx === 0 ? "#E2F6FB" : "#00B3E8"}
                  />
                </svg>
              </li>
              <li className="flex-item">
                <div className="carousel__dots">
                  {items.slice(1, length).map((pos, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      className={i === activeIdx ? "dot active" : "dot"}
                    />
                  ))}
                </div>
              </li>

              <li className="flex-item" onClick={() => nextClick()}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0003 21.6665H6.66699V18.3332H20.0003V6.6665L33.3337 19.9998L20.0003 33.3332V21.6665Z"
                    fill={activeIdx === 2 ? "#E2F6FB" : "#00B3E8"}
                  />
                </svg>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoadmapCarousel;
