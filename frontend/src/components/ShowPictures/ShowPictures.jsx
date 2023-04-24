import "./ShowPictures.scss";
import backImg from "@assets/point.svg";
import { shuffle } from "lodash";
import poke from "@assets/pokemon.png";
import React, { useState} from "react";
import { v4 as uuidv4 } from "uuid"; // import uuid library
import "./ShowPictures.scss";
import w from "@assets/w.png";
import k from "@assets/k.jpg";
import logo from "@assets/logo.png";
import nature from "@assets/nature.jpg";
import flower from "@assets/flower.jpg"; 
import princess from "@assets/princess.png"; 
import dog from "@assets/dog.jpg"; 
const imageList = [
  {
    name: "baba",
    url: flower,
    stat: "",
  },
  {
    name: "dudu",
    url: poke,
    stat: "",
  },
  {
    name: "baba",
    url: nature,
    stat: "",
  },
  {
    name: "dudu",
    url: "https://picsum.photos/seed/picsum/200/300",
    stat: "",
  },
  {
    name: "baba",
    url: dog,
    stat: "",
  },
  {
    name: "baba",
    url: k,
    stat: "",
  },
  {
    name: "baba",
    url: w,
    stat: "",
  },
  {
    name: "baba",
    url: logo,
    stat: "",
  },
  {
    name: "baba",
    url: backImg,
    stat: "",
  },
];
//  Temporary array will be fetched data from props

function ShowPictures() {
  const [cards, setCard] = useState(shuffle([...imageList, ...imageList])); //shuffle cards everytime
  const [clickedImg, setClickedImg] = useState([]); // the chosen img
  const [matchedCards, setMatchedCards] = useState([]); //array of identical imgs
  const [pairNum, setpairNum] = useState(0); // this shows how many times the player clicked (2 clicks = 1 turn)
  const [num, setNum] = useState(1);

  //when a card is selected, it stays open until we make a second choice.
  //It no match, both cards flip back

  const flipCard = (index) => {
    if (clickedImg.length === 0) {
      setClickedImg([index]);
    } else if (clickedImg.length === 1) {
      const firstChoice = clickedImg[0];
      const secondChoice = index;

      if (cards[firstChoice] === cards[secondChoice]) {
        setMatchedCards([...matchedCards, firstChoice, secondChoice]);
        console.log("match !");
      } else {
        console.log("not a match !");
      }
      setClickedImg([...clickedImg, index]);
    } else if (clickedImg.length === 2) {
      setClickedImg([index]);
    }
   
   
  };
 
  //when the player finds all the pairs, an animation of a princess shows up 
 if (matchedCards.length === 18) {
  return (
    <div>
      <input
            type= "image"
            id="princess"
            className={""}
            src={princess}
             />
    </div>

  )

  };
 
  const turns = () => {
    setNum(num + 1);
    if (num % 2 === 0) {
      setpairNum(pairNum + 1);
    }
  }
  return (
    <> 
    <div className="imageGrid">
      {cards.map((card, index) => {
        const displayedCard =
          clickedImg.indexOf(index) !== -1 ||
          matchedCards.indexOf(index) !== -1;
        return (
          <div
            className={"card-outer " + (displayedCard ? "flipped" : "")}
            onClick={() => {
              flipCard(index);
              turns();
            }}
          >
            <div className="card">
              <div className="front">
                <input
                  type="image"
                  className="front"
                  onDragStart={(e) => e.preventDefault()}
                  alt="memorycard"
                  key={`${uuidv4()}`}
                  src={card.url}
                  id={`${uuidv4()}`}
                />
              </div>
              <div className="back">
                <input type="image" src={""} key={index} alt="" />
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
export default ShowPictures;
