import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const CtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
  @media only screen and (max-width: 45.5em) {
    margin-bottom: 5rem;
  }
`;

const CtaImage = styled.img`
  width: 30rem;
  @media only screen and (max-width: 37.5em) {
    width: 25rem;
  }
`;

const CtaTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  @media only screen and (max-width: 37.5em) {
    font-size: 2.8rem;
  }
`;

const CtaDescription = styled.h2`
  font-weight: 400;
  text-align: center;
  @media only screen and (max-width: 37.5em) {
    font-size: 2rem;
  }
`;

const CtaContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ImageBtn = styled.button`
  margin-top: 5rem;
  background: transparent;
  border: none;
  @media only screen and (max-width: 37.5em) {
    :first-child {
      margin-left: 4rem;
    }
    :last-child {
      margin-right: 4rem;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function CallToAction() {
  return (
    <CtaWrapper>
      <Row>
        <Col sm={12} lg={3}>
          <ImgWrapper>
            <CtaImage src="/img/left-prototype.png" alt="left-product" />
          </ImgWrapper>
        </Col>

        <Col sm={12} lg={6}>
          <CtaContainer>
            <CtaTitle>
              Control your Pillow with SNEPY! App <br /> (Coming Soon!)
            </CtaTitle>
            <CtaDescription>
              you can control your pillow and choose a mode just in your hand
            </CtaDescription>
            <Container
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ImageBtn>
                <img
                  alt="playstore-btn"
                  style={{
                    width: "20rem",
                  }}
                  src="/img/playstore-btn.png"
                />
              </ImageBtn>
              <ImageBtn>
                <img
                  alt="appstore-btn"
                  style={{
                    width: "18rem",
                  }}
                  src="/img/appstore-btn.png"
                />
              </ImageBtn>
            </Container>
          </CtaContainer>
        </Col>

        <Col sm={12} lg={3}>
          <ImgWrapper>
            <CtaImage src="/img/right-prototype.png" alt="right-product" />
          </ImgWrapper>
        </Col>
      </Row>
    </CtaWrapper>
  );
}

export default CallToAction;
