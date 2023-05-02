import React, { useState } from "react";
import PropTypes from "prop-types";

import "./InputUsername.scss";

function InputUserName({ isReady }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const specialCharsRegex = /[^\w\s]/;
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    if (!specialCharsRegex.test(value)) {
      setInputValue(value);
      setText(value);
    }
    return value;
  }
  function handleSubmit(event) {
    setName(text);
    setInputValue("");
    event.preventDefault();
    if (text.length !== 0) {
      isReady(true);
      setError();
    } else {
      setError("you must choose a username first !");
    }
  }
  return (
    <div className="input-username">
      <h1 className="pseudo">{name && `Pseudo : ${name}`} </h1>
      <form
        className="form-username"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder="Entrer votre pseudo"
          maxLength={15}
        />
        {setError && <p className="error">{error}</p>}
        <button className="play" type="submit">
          Validate
        </button>
      </form>
    </div>
  );
}

export default InputUserName;
InputUserName.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  isReady: PropTypes.func.isRequired,
};
