import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 600px;

  h3 {
    padding: 10%;
    margin-bottom: 100px;
    text-align: center;
  }
  div {
    height: 300px;
    padding: 0 5%;
    position: relative;
    overflow: hidden;
    ul {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      li {
        img {
          width: 300px;
          margin-right: 10px;
          list-style: none;
          text-decoration: none;
        }
      }
    }
  }
`;

function SliderCard() {
  return (
    <Wrap>
      <h3>slider card</h3>
      <div>
        <ul>
          <li>
            <img
              src="https://images.unsplash.com/photo-1663464775968-d305e6465ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="pic"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1662212713312-9e9d8bf02345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="pic2"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1661348543336-603adab2125b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="pic3"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1660079543225-b359aeb10988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="pic4"
            />
          </li>
        </ul>
      </div>
    </Wrap>
  );
}
export default SliderCard;
