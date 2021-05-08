import React, { useEffect } from "react";
import Box from "../components/Box";
import CallToAction from "../components/CallToAction";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { firebaseAnalytics } from "../firebaseConfig";

function Landing() {
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  });

  return (
    <div>
      <Header />
      <Box />
      <Description />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Landing;
