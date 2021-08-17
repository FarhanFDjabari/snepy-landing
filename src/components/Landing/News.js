import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import NewsThumbnail from '../../asset/img/news-thumbnail.jfif'
import './News.scss'


const NewsBox = styled.div`
  width: 346px;
  height: 195px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
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
      <div className="news-outer-box">
        <Row className="container-fluid">
          <Col className="px-5">
            <h1 className="news-box-title">Berita Terbaru</h1>
          </Col>
        </Row>
        <div className="news-container p-5">
          <div className="container-fluid">
            <Slider {...settings}>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <NewsBox image={NewsThumbnail}>
                  <div className="news-title">
                    Title
                  </div>
                </NewsBox>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}