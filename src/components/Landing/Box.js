import styled from "styled-components";

const Wrapper = styled.div`
  position: static;
  min-width: 100vw;
  width: 100%;
  padding: 1.5rem 0;
  top: 0;
  min-height: 25vh;
  @media only screen and (max-width: 60.5em) {
    min-height: 10vh;
  }
`;

export default function Box() {
  return <Wrapper></Wrapper>;
}
