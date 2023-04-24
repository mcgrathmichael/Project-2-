/* eslint-disable react/prop-types */

//import Leaderboard from "@components/Leaderboard/Leaderboard";
import React, { useState } from "react";
import Input from "@components/Input";


function InputUserName({playername, setPlayerName}) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const [playersArray, setPlayersArray] = useState([]); 

  const handleChange = (e) => {
    setName(e.target.value);
    setPlayerName(playername)
  };

  function handleClick(e) {
    setText(name);
    e.preventDefault(); 
    setPlayersArray((prevalue) => {
      return [...prevalue, name];
    });
    
  }

  return (
    <div className="input-username">
      <h1>Your pseudo : {text} </h1>
      <form className="form-username" onSubmit={handleClick}>
        <input type="text" onChange={handleChange}
        placeholder="Pseudo"/>
        <button type="submit"
          onClick={()=> setPlayerName(name)}>
         Play ! 
        </button>
        <div>
         
        </div>
      </form>
    </div>
  );
}
export default InputUserName;
