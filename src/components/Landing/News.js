import React, { Component } from "react";
import Slider from "react-slick";
import './News.scss'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <h1>Berita Terbaru</h1>
        <div className="news-container p-5">
          <div className="container-fluid">
            <Slider {...settings}>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <div className="box">
                  Nofath
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}