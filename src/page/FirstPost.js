import styled from "styled-components";

const CardWrap = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
    margin-right: 20px;
  }
  section {
    padding: 10px 20px 10px 0;
    h3 {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
    }
  }
`;

function FirstPost() {
  return (
    <CardWrap>
      <img
        src="https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="img"
      />
      <section>
        <h3>title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </CardWrap>
  );
}
export default FirstPost;
