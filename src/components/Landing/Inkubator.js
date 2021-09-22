import "./Inkubator.scss";
import BIIWUB from "../../asset/img/BIIW_UB.png";
import PIF from "../../asset/img/PIF.png";
import Compfest from "../../asset/img/Compfest.png";
import FounderPlus from "../../asset/img/Founderplus.png";
import Kewirus from "../../asset/img/Kewirus.png";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const ImageBox = styled.div`
  width: 220px;
  height: 220px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 5px 20px;
`;

const TitleText = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  text-align: left;
  color: #101e5a;
`;

function Inkubator() {
  let listImage = [
    [PIF, "https://paragonfellows.com"],
    [Kewirus, "https://kewirus.com"],
    [Compfest, "https://www.compfest.id"],
    [FounderPlus, "https://founderplus.id"],
    [BIIWUB, "https://biiw.ub.ac.id"],
  ];

  return (
    <>
      <div className="container-fluid">
        <Row className="px-5">
          <Col>
            <TitleText>Inkubator Kami</TitleText>
            <div className="inkubator-list-box">
              {listImage.map((image) => (
                <ImageBox
                  image={image[0]}
                  onClick={() => window.open(image[1], "_blank")}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Inkubator;
