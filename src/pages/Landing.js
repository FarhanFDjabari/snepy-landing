import React, { useEffect } from "react";
import Box from "../components/Landing/Box";
import CallToAction from "../components/Landing/CallToAction";
import Description from "../components/Landing/Description";
import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";
import Video from '../components/Landing/Video'
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
      <Video />
    </div>
  );
}

export default Landing;
