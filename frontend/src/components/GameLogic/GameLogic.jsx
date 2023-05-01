import "./GameLogic.scss";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // import uuid library
import { shuffle, _ } from "lodash";
import PropTypes from "prop-types";
import StopWatch from "../StopWatch/StopWatch";
import Score from "../Score/Score";
import Countdown from "../Countdown/Countdown";

//  Temporary array will be fetched data from props
//  1 Fetch
//  2 uuid
//  3 intégrer à l'algo la comparaison de l'uuid
//  4 intégrer la vérification d'url

function GameLogic({ apiName, apiData, apiList }) {
  // ApiList.map(
  //   (api) =>
  //     api.name === apiName &&
  //     filteredData?.map((item) => (
  //       <img
  //         key={_.get(item, api.key)}
  //         src={_.get(item, api.path_to_image)}
  //         alt={_.get(item, api.item_name)}
  //         style={{
  //           width: "200px",
  //           height: "300px",
  //           objectFit: "cover",
  //         }}
  //       />
  //     ))
  // );
  //  Shuffle the apiData to not get the same image over and over
  const maxIndex = apiData.length - 15;
  const startIndex = Math.floor(Math.random() * (maxIndex + 1));
  const [cards] = useState(
    shuffle([
      ...apiData.slice(startIndex, startIndex + 15),
      ...apiData.slice(startIndex, startIndex + 15),
    ])
  ); // shuffle cards everytime
  const [clickedImg, setClickedImg] = useState([]); // the chosen img
  const [matchedCards, setMatchedCards] = useState([]); // array of identical imgs
  const [pairNum, setpairNum] = useState(0); // this shows how many times the player clicked (2 clicks = 1 turn)
  const [num, setNum] = useState(1);
  const [score, setScore] = useState(0);
  // when a card is selected, it stays open until we make a second choice.
  // It no match, both cards flip back

  const flipCard = (index) => {
    if (clickedImg.length === 0) {
      setClickedImg([index]);
    } else if (clickedImg.length === 1) {
      const firstChoice = clickedImg[0];
      const secondChoice = index;
      if (firstChoice !== secondChoice) {
        if (cards[firstChoice] === cards[secondChoice]) {
          setMatchedCards([...matchedCards, firstChoice, secondChoice]);
          console.warn("match !");
          setScore(score + 500);
        } else {
          console.warn("not a match !");
          if (score === 0 || score <= 300) {
            setScore(0);
          } else {
            setScore(score - 150);
          }
        }
        setClickedImg([...clickedImg, index]);
      }
    } else if (clickedImg.length === 2) {
      setClickedImg([index]);
    }
  };

  if (matchedCards.length === 30) {
    return (
      <div>
        <input
          type="image"
          id="princess"
          className=""
          alt="princess img"
          src={apiData[30]}
        />
      </div>
    );
  }

  const turns = () => {
    setNum(num + 1);
    if (num % 2 === 0) {
      setpairNum(pairNum + 1);
    }
  };
  const [showComponent, setShowComponent] = useState(false);

  // show certain components after 5 sec
  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 5000);
  }, []);
  return (
    <>
      {apiName}
      <Countdown />
      {showComponent && <StopWatch />}
      {showComponent && <Score score={score} />}
      <div className="imageGrid">
        {cards.map((card, index) => {
          const displayedCard =
            clickedImg.indexOf(index) !== -1 ||
            matchedCards.indexOf(index) !== -1;
          return (
            /* eslint-disable */
            <div
              className={`card-outer ${displayedCard ? "flipped" : ""} ${
                !showComponent ? "flipped" : ""
              }`}
              onClick={() => {
                showComponent ? flipCard(index) : "";
                showComponent ? turns() : "";
              }}
            >
              <div className="card">
                <div className="front" key={`${uuidv4()}`}>
                  <input
                    type="image"
                    className="front"
                    onDragStart={(e) => e.preventDefault()}
                    alt="memorycard"
                    key={`${uuidv4()}`}
                    src={
                      apiList?.find((api) => api.name === apiName)
                        ?.path_to_image &&
                      _.get(
                        card,
                        apiList?.find((api) => api.name === apiName)
                          ?.path_to_image
                      )
                    }
                    id={`${uuidv4()}`}
                  />
                </div>
                <div className="back" key={`${uuidv4()}`}>
                  <input type="image" src="" key={`${uuidv4()}`} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ClickCounterBtn">
        <button className="myButton" type="submit">
          {pairNum} Turns
        </button>
      </div>
    </>
  );
}
GameLogic.propTypes = {
  apiName: PropTypes.string.isRequired,
  apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
  apiList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default GameLogic;
