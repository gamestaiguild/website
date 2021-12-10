import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function LandingPageLayout(props) {
  const { children } = props;
  const [isHamBurger, setIsHamBurger] = useState(false)

  const onChangeHamBurger = () =>{
    setIsHamBurger(!isHamBurger)
  }

  return (
    <div className={isHamBurger ? "dashboard-wrapper move stop-scroller" :"dashboard-wrapper move"}>
      <Header headerVisible={true} onChangeHamBurger={onChangeHamBurger} />
        <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
