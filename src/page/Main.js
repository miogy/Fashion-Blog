import Slide from './Slide.js';
import Button from './Button.js';
import './Main.scss';

function Main(){
  return(
    <div className="main-container">
      <Slide imgSlide={imgSlide}
      className="main-slider"
      />
      <Button />
    </div>
  )
}
export default Main;

const imgSlide = [
  {
    id : 1,
    url : "https://images.unsplash.com/photo-1663070533177-96ef14e0b2ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    id : 2,
    url : "https://images.unsplash.com/photo-1662878292808-3e6a4d1ac91c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    id : 3,
    url : "https://images.unsplash.com/photo-1662659512148-35f5ca4ee2a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id : 4,
    url : "https://images.unsplash.com/photo-1662532692957-55eb947054c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
]