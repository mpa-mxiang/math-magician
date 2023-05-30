import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  <div className="calculator">
    <div className="display">0</div>
    <div className="buttons">
      <div className="row">
        <button type="button" className="clear-button">AC</button>
        <button type="button" className="clear-button">+/-</button>
        <button type="button" className="clear-button">%</button>
        <button type="button" className="operator-button">÷</button>
      </div>
      <div className="row">
        <button type="button" className="button">7</button>
        <button type="button" className="button">8</button>
        <button type="button" className="button">9</button>
        <button type="button" className="operator-button">×</button>
      </div>
      <div className="row">
        <button type="button" className="button">4</button>
        <button type="button" className="button">5</button>
        <button type="button" className="button">6</button>
        <button type="button" className="operator-button">-</button>
      </div>
      <div className="row">
        <button type="button" className="button">1</button>
        <button type="button" className="button">2</button>
        <button type="button" className="button">3</button>
        <button type="button" className="operator-button">+</button>
      </div>
      <div className="row">
        <button type="button" className="zero-button">0</button>
        <button type="button" className="decimal-button">.</button>
        <button type="button" className="operator-button">=</button>
      </div>
    </div>
  </div>
};

export default Calculator;
