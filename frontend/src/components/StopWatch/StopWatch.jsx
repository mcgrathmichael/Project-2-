import React, { useState, useEffect } from "react";
import "./StopWatch.scss";
import PropTypes from "prop-types";

function StopWatch({ isFinished }) {
  const [time, setTime] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((timee) => {
        if (timee === 0) {
          clearInterval(timer);
          isFinished(true);
          return 0;
        }
        return timee - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="stopwatch-container">
      <p className="clock">
        {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
}

export default StopWatch;
StopWatch.propTypes = {
  isFinished: PropTypes.func.isRequired,
};
