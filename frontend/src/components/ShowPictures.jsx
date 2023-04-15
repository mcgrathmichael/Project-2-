import React, { useState } from "react";
import "./styles/ShowPictures.scss";
import point from "../assets/point.svg";

function ShowPictures() {
  const [num, setNum] = useState(1);
  const [pairNum, setpairNum] = useState(0);

  const count = () => {
    setNum(num + 1);
    if (num % 2 === 0) {
      setpairNum(pairNum + 1);
    }
  };

  // images from Api array
  const imageArr = [
    { src: point, alt: "random" },
    { src: point, alt: "random" },
    { src: point, alt: "random" },
  ];
  // doubling the num of cards
  const cardsArray = [...imageArr, ...imageArr];

  return (
    <div>
      <div className="ClickCounterBtn">
        <button className="myButton" type="submit">
          {pairNum} round
        </button>
      </div>

      {/* Mapping through the Arr of images  */}
      {cardsArray.map((image) => (
        <div className="images">
          <input
            type="image"
            className="img1"
            onClick={count}
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowPictures;
