import React, { useEffect, useState } from "react";

const slideWidth = 30;

const _items = [
  
  {
    player: {
      title: "Machine Learning Player Promotion",
      desc: "To optimise our yields and reward the best players with the best assets, we are developing an AI based Machine Learning algorithm to automatically promote and reward scholars in our program.",
    },
  },
  {
    player: {
      title: "Gamestation Incubation",
      desc: "After an extremely successful partnership between DOPEWARZ & GAMESTATION, VMG decided to again incubate Gamesta with Gamestation. With their wealth of knowledge and large network of value add investors, Gamesta are confident of another incredible partnership.",
    },
  },
  {
    player: {
      title: "Established Operations",
      desc: "As mentioned in the Background, Gamesta is already in operation, with over 300+ players in its network, actively using our 200ETH in-game NFT assets.",
    },
  },
  {
    player: {
      title: "Tiered 50/50 Profit Split",
      desc: "We want to attract the BEST players in the world into our ecosystem. We believe that the player's time is equal in value to the assets being used, so therefore will be operating a tiered reward system for players with up to 50/50 profit share from gaming profits.",
    },
  },
  {
    player: {
      title: "Gamesta Academy",
      desc: "Led by some of the best players in the world, our unique gaming academy will enable us to incubate and train players to maximise their potential and yield when using our assets.",
    },
  },
  {
    player: {
      title: "A.I. Powered Acquisitions",
      desc: "A.I. & Machine Learning is revolutionising processes in all aspects of business, in every industry. Gamesta is developing an A.I. & ML based algorithm to assist in asset acquisition decisions. We estimate this will increase the efficiency of our treasury 2-3 fold, and significantly reduce the risks of human errors and sentiment based choices.",
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
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      {/* <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div> */}
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
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
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <div className="carousel__container">
          <ul className="carousel__slide-list">
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
                  {items.slice(3, length).map((pos, i) => (
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
                    fill={activeIdx === 5 ? "#E2F6FB" : "#00B3E8"}
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

export default Carousel;
