import React, { useEffect } from "react";
// import CallToAction from "../components/Landing/CallToAction";
import Description from "../components/Landing/Description";
import Integration from "../components/Landing/Integration"
// import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";
import Navbar from "../components/Landing/Navbar"
// import Video from '../components/Landing/Video'
import Interest from '../components/Landing/Interest'
import Inkubator from '../components/Landing/Inkubator'
import Video from '../components/Landing/Video'
import Footer from '../components/Landing/Footer'
import { firebaseAnalytics } from "../firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-slick/dist/react-slick.js'
import 'react-slick/dist/react-slick.min.js'
import "./LandingPage.scss"

function Landing() {
  useEffect(() => {
    firebaseAnalytics.logEvent("homepage_visited");
  });

  return (
    <>
      <Navbar />
      <Header />
      <Description />
      <Integration />
      <Video />
      <Interest />
      <Inkubator />
      <Footer />
    </>
  );
}

export default Landing;
