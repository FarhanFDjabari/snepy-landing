import "./Interest.scss";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 3.5rem;
  text-align: left;
  margin-bottom: 4rem;
`;

const DescriptionText = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  text-align: justify;
`;

const KotakProgress = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid black;
`;

const BesarProgress = styled.div`
  height: 100%;
  background-color: black;
  width: 20%;
`

function Interest() {
  return (
    <>
      <div class="interest-wrapper">
        <div class="interest-content">
          <Container>
            <Row>
              <Col className="interest-left">
                <div class="detail">
                  <TitleText>Tertarik dengan SNEPY?!</TitleText>
                  <DescriptionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada magna gravida sapien laoreet tincidunt orci quis.
                    Malesuada eget egestas volutpat a feugiat tellus est, lacus,
                    tempus.
                  </DescriptionText>
                </div>
                <KotakProgress>
                  <BesarProgress />
                </KotakProgress>
              </Col>
              <Col className="interest-right">
                <div class="photo"></div>
              </Col>
            </Row>
          </Container>
        </div>
        <div class="interest-background">
          <div class="blue-line"></div>
        </div>
      </div>
    </>
  );
}

export default Interest;
