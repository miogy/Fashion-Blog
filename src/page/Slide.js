import './Slide.scss';

function Slide({imgSlide}){
  return (
    <div className="slide-container">
      <div className="slide-show">
      {imgSlide.map((slide)=>{
        return <div key={slide.id} 
        className="slide-img"
        >
          <img src={slide.url} alt="mainImg"/>
        </div>
      })}
    </div>
    </div>
  )
}
export default Slide;