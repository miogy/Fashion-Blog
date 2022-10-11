import styled from "styled-components";

const SectionImage = styled.div`
  width: 50%;
  position: relative;
  h3 {
    position: absolute;
    font-size: 2.75rem;
    line-height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 1;
  }
  img {
    width: 100%;
  }
`;
function MainImg() {
  return (
    <SectionImage>
      <h3>New Design</h3>
      <img
        src="https://images.unsplash.com/photo-1528905895600-30137e04d936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="img"
      ></img>
    </SectionImage>
  );
}
export default MainImg;
