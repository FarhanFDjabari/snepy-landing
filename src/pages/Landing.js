import React from "react";
import Box from "../components/Box";
import CallToAction from "../components/CallToAction";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Landing() {
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
