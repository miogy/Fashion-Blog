import { useEffect } from "react";
import styled from "styled-components";
import FirstSection from "./FirstSection";
import MainImg from "./MainImg";

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
function Section1() {
  useEffect(() => {
    fetch("/data/cardData.json")
      .then((res) => res.json())
      .then((data) => {});
  });

  return (
    <Container>
      <ContentWrap>
        <MainImg />
        <FirstSection />
      </ContentWrap>
    </Container>
  );
}
export default Section1;
