import React, { useState } from 'react';

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

    if (operator === '+') {
      return previous + inputValue;
    } if (operator === '-') {
      return previous - inputValue;
    } if (operator === '×') {
      return previous * inputValue;
    } if (operator === '÷') {
      return previous / inputValue;
    }

    return inputValue;
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
          <button type="button" onClick={handleClearClick} className="clear-button">AC</button>
          <button type="button" onClick={() => handleOperatorClick('÷')} className="operator-button">÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleDigitClick('7')}>7</button>
          <button type="button" onClick={() => handleDigitClick('8')}>8</button>
          <button type="button" onClick={() => handleDigitClick('9')}>9</button>
          <button type="button" onClick={() => handleOperatorClick('×')} className="operator-button">×</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleDigitClick('4')}>4</button>
          <button type="button" onClick={() => handleDigitClick('5')}>5</button>
          <button type="button" onClick={() => handleDigitClick('6')}>6</button>
          <button type="button" onClick={() => handleOperatorClick('-')} className="operator-button">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleDigitClick('1')}>1</button>
          <button type="button" onClick={() => handleDigitClick('2')}>2</button>
          <button type="button" onClick={() => handleDigitClick('3')}>3</button>
          <button type="button" onClick={() => handleOperatorClick('+')} className="operator-button">+</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleDigitClick('0')} className="zero-button">0</button>
          <button type="button" onClick={() => handleDigitClick('.')} className="decimal-button">.</button>
          <button type="button" onClick={handleEqualClick} className="equal-button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
