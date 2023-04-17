import React, { useState } from "react";

function InputUserName() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  function handleClick(e) {
    setText(name);
    e.preventDefault();
  }

  return (
    <div className="input-username">
      <h1>Votre pseudo : {text} </h1>
      <form className="form-username" onSubmit={handleClick}>
        <input type="text" onChange={handleChange} placeholder="Pseudo" />
        <button type="submit">Play !</button>
      </form>
    </div>
  );
}

export default InputUserName;
