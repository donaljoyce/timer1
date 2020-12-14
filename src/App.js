
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    const dd=new Date(`2020-12-17`);
    const difference = +dd - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      
        <span > <button> {timeLeft[interval]}  {interval} </button></span>
      
    );
  });
  return (
    <div className="main">
      <h1>Offer Timer......</h1>
      <h2>Offer Ends in just....</h2>
      <div className="counter">
      {timerComponents.length ?timerComponents: <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default App;