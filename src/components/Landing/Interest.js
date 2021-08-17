import { useState, useEffect } from 'react'
import "./Interest.scss";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PhoneImg from '../../asset/img/Phone.png'

const TitleText = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #101E5A;

  @media only screen and (max-width: 992px) {
    text-align: center;
  }
`;

const DescriptionText = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  @media only screen and (max-width: 992px) {
    text-align: center;
  }
`;

const KotakProgress = styled.div`
  width: 100%;
  // height: 20px;
  border: 2px solid white;
  border-radius: 50px;
  padding: 0;
  margin: 0;
`;

const BesarProgress = styled.div`
  height: 100%;
  width: ${props => props.people / props.max * 100}%;
  background-color: white;
  border-radius: 50px;
`

const BesarProgressText = styled.p`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  white-space: pre;
  text-overflow: clip; 
  overflow: hidden;
  color: #101E5A;
`

function Interest() {

  const [countPeople, setCountPeople] = useState(0)
  const [maxPeople, setMaxPeople] = useState(0)

  useEffect(() => {
    setCountPeople(20)
    setMaxPeople(50)
  }, [])

  return (
    <>
      <div className="interest-wrapper">
        <div className="interest-content">
          <div className="container-fluid">
            <Row className="bg-mobile px-5">
              <Col className="interest-left">
                <div className="detail mb-5">
                  <TitleText>Tertarik dengan SNEPY?!</TitleText>
                  <DescriptionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada magna gravida sapien laoreet tincidunt orci quis.
                    Malesuada eget egestas volutpat a feugiat tellus est, lacus,
                    tempus.
                  </DescriptionText>
                </div>
                <div className="interest-form-email">
                  <KotakProgress className="mb-4">
                    <BesarProgress people={countPeople} max={maxPeople}>
                      <BesarProgressText>{countPeople} Orang</BesarProgressText>
                    </BesarProgress>
                  </KotakProgress>
                  <div className="input-email">
                    <button className="btn-input-email" onClick={()=> window.open("https://forms.gle/XcdB1xeLUW9ZZwNo7", "_blank")}>Daftarkan Dirimu!</button>
                  </div>
                </div>
              </Col>
              <Col className="interest-right">
                <div>
                  <img src={PhoneImg} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="interest-background">
          <div className="blue-line d-none d-lg-block"></div>
        </div>
      </div>
    </>
  );
}

export default Interest;
