import NewCard from "./NewCard";
import styled from "styled-components";

const NewWrap = styled.div`
  width: 50%;
  height: 1260px;
  position: relative;
  overflow: scroll;
`;

function FirstPattern() {
  return (
    <NewWrap>
      <NewCard />
      <NewCard />
      <NewCard />
    </NewWrap>
  );
}
export default FirstPattern;
