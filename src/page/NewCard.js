import styled from "styled-components";

const CardWrap = styled.div`
  width: 100%;
`;

function NewCard() {
  return (
    <CardWrap>
      <img
        src="https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="img"
      ></img>
    </CardWrap>
  );
}
export default NewCard;
