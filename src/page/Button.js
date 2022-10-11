import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';
import './Button.scss';

function Button(){
  return(
    <div className="slide-btn">
      <button className='prev' 
      ><IoIosArrowBack /></button>
      <button className='next'
      ><IoIosArrowForward /></button>
    </div>
  )
}
export default Button;