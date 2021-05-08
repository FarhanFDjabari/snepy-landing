import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import { firebaseAnalytics } from "../firebaseConfig";

const NavWrapper = styled(Navbar)`
  position: static;
  min-width: 100vw;
  padding: 2rem 8rem;
  z-index: 1;
  justifycontent: space-between;
`;

const NavItem = styled.a`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b6b6b;
  &:hover {
    color: #101e5a;
  }
  &:not(:last-child) {
    margin-right: 6rem;
  }
  @media only screen and (max-width: 62em) {
    &:not(:last-child) {
      margin-right: 0rem;
    }
    :last-child {
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 56.5em) {
    font-size: 2rem;
  }
`;

const NavContainer = styled(Nav)`
  display: flex;
  align-items: center;
`;

const ImgContainer = styled(Nav)`
  display: flex;
`;

const HeaderBtn = styled(Button)`
  background-color: #101e5a;
  font-weight: 500;
  color: #fff;
  font-size: 1.8em;
  padding: 1em 1em;
  border: none;
  border-radius: 1rem;
  &:hover {
    background-color: #434588;
  }
`;

const NavImg = styled.img`
  @media only screen and (max-width: 56.25em) {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

function downloadBtnHandler() {
  firebaseAnalytics.logEvent("download_button_clicked");
  window.open("/img/snepy.apk");
}

function Header() {
  return (
    <NavWrapper
      expand="lg"
      style={{
        backgroundColor: "rgba(255,255,255, 0)",
        transition: "0.3s ease",
      }}
    >
      <Navbar.Brand href="/">
        <NavImg
          style={{
            marginRight: "6rem",
          }}
          width="100px"
          src="/img/snepy-logo.png"
          alt="snepy-logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavContainer className="mr-auto">
          <NavItem>Features</NavItem>
          <NavItem>Help Center</NavItem>
          <NavItem>Rental Location</NavItem>
          <NavItem onClick={downloadBtnHandler}>Download App</NavItem>
        </NavContainer>
        <ImgContainer>
          <HeaderBtn>Buy Snepy!</HeaderBtn>
        </ImgContainer>
      </Navbar.Collapse>
    </NavWrapper>
  );
}

export default Header;
