import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: static;
  background-color: #fff;
  min-width: 100vw;
  width: 100%;
  padding: 4rem 0;
  min-height: 5rem;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #101e5a;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>Copyright@2021 SNEPY!</FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
