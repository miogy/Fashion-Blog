
function Section1(){
  return(
    <div className="section1-container">
      <h3>New Design</h3>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

function Card(){
  return(
    <div className="new-card">
      <div className="new-card-container">
          <dl className="new-card-show">
            <dt>디자인 이미지</dt>
            <dd>디자인 설명</dd>
          </dl>
      </div>
    </div>
  )
}
export default Section1;
