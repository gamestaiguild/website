import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function LandingPageLayout(props) {
  const { children } = props;

  return (
    <div className="dashboard-wrapper move">
      <Header headerVisible={true} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
