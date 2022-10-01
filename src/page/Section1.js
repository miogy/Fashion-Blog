import { useEffect, useState } from "react";

function Section1() {
  const [cardArr, setCardArr] = useState([]);

  useEffect(() => {
    fetch("/data/cardData.json")
      .then((res) => res.json())
      .then((data) => {});
  });

  return (
    <div className="section1-container">
      <h3>New Design</h3>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="new-card">
      <div className="new-card-container">
        <dl className="new-card-show">
          <dt>디자인 이미지</dt>
          <dd>디자인 설명</dd>
        </dl>
      </div>
    </div>
  );
}
export default Section1;
