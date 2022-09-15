import Slide from './mainSlider/Slide';
import Section1 from './Section1.js';

import './Main.scss';

function Main(){
  return(
    <div className="main-container">
      <div 
      className="center-margin">
      <Slide />
      </div>
      <div 
      className="center-margin">
      <Section1 />
      </div>
    </div>
  )
}
export default Main;
