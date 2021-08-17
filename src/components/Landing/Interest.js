import "./Interest.scss";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PhoneImg from "../../asset/img/Phone.png";

const TitleText = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #101e5a;

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
`;

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
  /* identical to box height */

  /* Snepy!/Secondary */

  color: #101e5a;
`;

function Interest() {
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
                    <BesarProgress>
                      <BesarProgressText>4 Orang</BesarProgressText>
                    </BesarProgress>
                  </KotakProgress>
                  <DescriptionText className="mb-4">
                    Segera!
                    <a href="#">
                      {" "}
                      Daftar email anda untuk masuk daftar antrian.
                    </a>
                  </DescriptionText>
                  <div className="input-email">
                    <button
                      className="btn-input-email"
                      onClick={() =>
                        window.open(
                          "https://forms.gle/XcdB1xeLUW9ZZwNo7",
                          "_blank"
                        )
                      }
                    >
                      Daftarkan Dirimu!
                    </button>
                  </div>
                </div>
              </Col>
              <Col className="interest-right">
                <div>
                  <img src={PhoneImg} alt="phone_image" />
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
