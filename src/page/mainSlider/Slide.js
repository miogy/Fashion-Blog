import { useEffect, useState } from 'react';
import Button from './Button';
import './Slide.scss';
import dataSlider from './dataSlider';

function Slide(){

  const [slideIndex,setSlideIndex] = useState(1);

  useEffect (()=>{
    const intervar = setInterval(()=>{
      setSlideIndex(slideIndex !== dataSlider.length
        ? slideIndex +1 : 1); //현재 이미지와 이미지갯수가 다르면 이미지 +1 같으면 이미지 1
    },3000);
    return () => clearInterval(intervar);
  },[slideIndex])

  const nextSlide = ()=>{
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex +1)
    }else if(slideIndex === dataSlider.length){
      setSlideIndex(1)
    }
  }
  const prevSlide = ()=>{
    if(slideIndex !== 1){
      setSlideIndex(slideIndex -1)
    }else if(slideIndex === 1 ){
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = index =>{
    setSlideIndex(index)
  }


  return (
    <div className="slide-container">
      <div className="slide-show">
      {dataSlider.map((slide, index)=>{
        return <div key={slide.id} 
        className={slideIndex === index + 1 ? "slide active-animation" : "slide"}>
          <img 
          className="slide-img"
          src={process.env.PUBLIC_URL + `/imgs/img${index +1}.jpg`} alt="mainImg"/> 
        </div>
      })}
      <Button 
      moveSlide={nextSlide}
      direction={"next"}
      />
      <Button
      moveSlide={prevSlide }
      ditection={"prev"}
      />
      <div className="slide-dot">
        {Array.from({length:6}).map((img, index)=>(
          <div 
          onClick={()=> moveDot(index + 1)}
          className={slideIndex === index +1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Slide;