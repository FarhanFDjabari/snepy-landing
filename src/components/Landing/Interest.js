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
  width: 516px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50px;
  padding: 0;
  margin: 0;
`;

const BesarProgress = styled.div`
  height: 100%;
  width: 40%;
  background-color: white;
  border-radius: 50px;
`

const BesarProgressText = styled.p`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
                <div className="interest-form-email">
                  <KotakProgress>
                    <BesarProgress>
                      <BesarProgressText>4 Orang</BesarProgressText>
                    </BesarProgress>
                  </KotakProgress>
                  <p>Segera!
                    <a href="google.com">Daftar email anda untuk masuk daftar antrian.</a>
                  </p>
                  <div className="input-email">
                    <input className="form-input-email" type="text" placeholder="Email Anda" />
                    <button className="btn-input-email">Daftarkan Dirimu!</button>
                  </div>
                </div>
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
