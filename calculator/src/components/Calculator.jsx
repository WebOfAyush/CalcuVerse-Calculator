import React, { useState } from 'react';
import "../styles/calculator.css"
const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      setInput(eval(input).toString());
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <main>
      <div className="main">
        <div className="screen">
          <div className="display">
            <input className="input" type="text" value={input} readOnly />
          </div>
          <div className="buttons">
            {['7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '/', '=', 'C'].map((btn, index) => (
              <button key={index} onClick={() => handleClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
