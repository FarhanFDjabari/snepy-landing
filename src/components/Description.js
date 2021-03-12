import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const DescriptionBody = styled.div`
  display: flex;
  min-height: 70vh;
  @media only screen and (max-width: 45.25em) {
    min-height: 60vh;
  }
`;
const TitleText = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const DescriptionText = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const ImgWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 60.5em) {
    margin-top: 3rem;
  }
`;

function Description() {
  return (
    <DescriptionBody>
      <Container fluid>
        <Row>
          <Col md={6}>
            <DescriptionContainer>
              <TitleText>
                A Smart Pillow for Your Need <br />
              </TitleText>
              <DescriptionText>
                Introducing SNEPY! a smart pillow with thermal therapy and alarm
                to prevent tension neck syndrome and oversleeping while in
                public transportation
              </DescriptionText>
            </DescriptionContainer>
          </Col>
          <Col md={6}>
            <ImgWrapper>
              <img
                style={{ width: "50rem" }}
                alt="snepy-product"
                src="/img/snepy-product.png"
              />
            </ImgWrapper>
          </Col>
        </Row>
      </Container>
    </DescriptionBody>
  );
}

export default Description;
