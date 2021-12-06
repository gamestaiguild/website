import React from "react";
import enjLogo from "../assets/enj.png";
import equLogo from "../assets/equ.png";
import gameStnLogo from "../assets/game-station.png";
import oxBullLogo from "../assets/oxbull.png";
import polyLogo from "../assets/poly.png";
import InfiniteCarousel from 'react-leaf-carousel';
import OpenSeaIcon from "../assets/openSeaIcon.png";
import CopperIcon from "../assets/copperIcon.svg";


const _items = [
  {
     logo: enjLogo
  },
  {
     logo: equLogo
  },
  {
     logo: gameStnLogo
  },
  {
     logo: oxBullLogo
  },
  {
     logo: polyLogo
  },
  {
    logo: OpenSeaIcon
  },
  {
    logo: CopperIcon
  }
];
const CarouselSlideItem = ({item}) => {
  return (
    <div className="logo-list-item">
      <img
        src={item.logo}
        alt="logo"
      />
    </div>
  );
};
const BrandIconsCarousel = () => {
    return (
    <InfiniteCarousel
    arrows={false}
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
      {
        _items.map((item, index) => (
            <CarouselSlideItem
                key={index}
                item={item}
              />
        ))
      }
  </InfiniteCarousel>
    );
};
export default BrandIconsCarousel;