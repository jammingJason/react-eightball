import React, { useState } from 'react';
import './EightBall.css';
const EightBall = ({ answers }) => {
  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState('Think of a Question');
  //   const color = 'black';
  function getAnswer() {
    const rndNum = Math.floor(Math.random() * answers.length);
    const answer = answers[rndNum];
    setMsg(answer.msg);
    setColor(answer.color);
    return;
  }
  function resetBoard() {
    setColor('black');
    setMsg('Think of a Question');
  }
  return (
    <>
      <div className="EightBall" style={{ backgroundColor: color }}>
        <p>{msg}</p>
        <button onClick={getAnswer}>Get Answer!</button>
      </div>
      <div>
        <button onClick={resetBoard}>Reset Board</button>
      </div>
    </>
  );
};

export default EightBall;
