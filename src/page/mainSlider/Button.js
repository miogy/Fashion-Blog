import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Slide.scss";

function Button({ moveSlide, direction }) {
  // console.log(moveSlide, direction)
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "next" : "prev"}
    >
      {direction === "next" ? <IoIosArrowForward /> : <IoIosArrowBack />}
    </button>
  );
}
export default Button;
