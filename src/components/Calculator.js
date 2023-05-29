import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + digit);
    }
  };

  const performOperation = () => {
    const inputValue = parseFloat(displayValue);
    const previous = previousValue;
    let res = 0;
    if (operator === '+') {
      res = previous + inputValue;
    } else if (operator === '-') {
      res = previous - inputValue;
    } else if (operator === '×') {
      res = previous * inputValue;
    } else if (operator === '÷') {
      res = previous / inputValue;
    } else if (operator === '+/-') {
      res = -1 * previous;
    } else if (operator === '%') {
      res = previous / 100;
    }

    return res;
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = performOperation();
      setDisplayValue(String(result));
      setPreviousValue(result);
    }

    setOperator(nextOperator);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    if (!operator) return;

    const result = performOperation();
    setDisplayValue(String(result));
    setPreviousValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={handleClearClick} className="clear-button" type="button">
            AC
          </button>
          <button onClick={() => handleOperatorClick('+/-')} className="clear-button" type="button">
            +/-
          </button>
          <button onClick={() => handleOperatorClick('%')} className="clear-button" type="button">
            %
          </button>
          <button onClick={() => handleOperatorClick('÷')} className="operator-button" type="button">
            ÷
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('7')} type="button">7</button>
          <button onClick={() => handleDigitClick('8')} type="button">8</button>
          <button onClick={() => handleDigitClick('9')} type="button">9</button>
          <button onClick={() => handleOperatorClick('×')} className="operator-button" type="button">
            ×
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('4')} type="button">4</button>
          <button onClick={() => handleDigitClick('5')} type="button">5</button>
          <button onClick={() => handleDigitClick('6')} type="button">6</button>
          <button onClick={() => handleOperatorClick('-')} className="operator-button" type="button">
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('1')} type="button">1</button>
          <button onClick={() => handleDigitClick('2')} type="button">2</button>
          <button onClick={() => handleDigitClick('3')} type="button">3</button>
          <button onClick={() => handleOperatorClick('+')} className="operator-button" type="button">
            +
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('0')} className="zero-button" type="button">0</button>
          <button onClick={() => handleDigitClick('.')} className="decimal-button" type="button">.</button>
          <button onClick={handleEqualClick} className="equal-button" type="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
