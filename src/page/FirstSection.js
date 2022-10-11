import FirstPost from "./FirstPost";
import styled from "styled-components";
import SliderCard from "../component/SliderCard";

const NewWrap = styled.div`
  width: 50%;
  height: 1260px;
  position: relative;
  overflow: scroll;
`;

function FirstSection() {
  return (
    <NewWrap>
      <FirstPost />
      <SliderCard />
      <FirstPost />
    </NewWrap>
  );
}
export default FirstSection;
