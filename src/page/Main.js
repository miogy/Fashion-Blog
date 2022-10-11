import Slide from "./mainSlider/Slide";
import Section1 from "./Section1.js";
import styled from "styled-components";

const MainWrap = styled.div`
  .main-container
    width: 100%;
    margin: 0 auto;
    position:relative;
`;
const SlideWrap = styled.div``;
const SectionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

function Main() {
  return (
    <MainWrap>
      <SlideWrap>
        <Slide />
      </SlideWrap>
      <SectionWrap>
        <Section1 />
      </SectionWrap>
    </MainWrap>
  );
}
export default Main;
