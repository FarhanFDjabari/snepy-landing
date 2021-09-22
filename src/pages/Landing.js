import React, { useEffect } from "react";
// import CallToAction from "../components/Landing/CallToAction";
import BarAtas from "../components/Landing/Bar"
import Description from "../components/Landing/Description";
import Integration from "../components/Landing/Integration"
// import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";
import Navbar from "../components/Landing/Navbar"
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
      <div className="">
        <Header />
      </div>
      <BarAtas />
      <Description />
      <Integration />
      <Video />
      <Interest />
      {/* <Inkubator /> */}
      <Footer />
      <svg onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} className="icon-to-top" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 0C15.6719 0 0 15.6719 0 35C0 54.3281 15.6719 70 35 70C54.3281 70 70 54.3281 70 35C70 15.6719 54.3281 0 35 0ZM35 64.0625C18.9531 64.0625 5.9375 51.0469 5.9375 35C5.9375 18.9531 18.9531 5.9375 35 5.9375C51.0469 5.9375 64.0625 18.9531 64.0625 35C64.0625 51.0469 51.0469 64.0625 35 64.0625Z" fill="#B7B7BA" fill-opacity="0.8" />
        <path d="M35.0625 6C19.0156 6 6 19.0156 6 35.0625C6 51.1094 19.0156 64.125 35.0625 64.125C51.1094 64.125 64.125 51.1094 64.125 35.0625C64.125 19.0156 51.1094 6 35.0625 6ZM47.8828 35.5469L30.8203 47.9609C30.7268 48.0282 30.6165 48.0683 30.5016 48.0769C30.3868 48.0855 30.2718 48.0624 30.1692 48.0099C30.0667 47.9574 29.9806 47.8777 29.9204 47.7794C29.8602 47.6812 29.8283 47.5683 29.8281 47.4531V22.6406C29.8277 22.5252 29.8593 22.4119 29.9194 22.3134C29.9794 22.2148 30.0656 22.1348 30.1684 22.0822C30.2711 22.0296 30.3864 22.0065 30.5015 22.0154C30.6166 22.0244 26.9066 22.5728 27 22.6406L29.8281 51.5C29.9087 51.557 52.5 51.5 48.0746 34.7593C51.4302 47.4531 52.5 37.9013 52.5 38C52.5 38.0987 48.1199 35.239 48.0746 35.3267C48.0292 35.4144 47.9634 35.4899 47.8828 35.5469Z" fill="black" fill-opacity="0.3" />
        <path d="M47.1429 44L35 32.125L22.8571 44L18 41.625L35 25L52 41.625L47.1429 44Z" fill="#DEDEDE" />
      </svg>
    </>
  );
}

export default Landing;
