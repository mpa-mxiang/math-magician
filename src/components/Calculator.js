import './Calculator.css';

const Calculator = () => {
  <div className="calculator">
    <div className="display">{}</div>
    <div className="buttons">
      <div className="row">
        <button className="clear-button" type="button">
          AC
        </button>
        <button className="clear-button" type="button">
          +/-
        </button>
        <button className="clear-button" type="button">
          %
        </button>
        <button className="operator-button" type="button">
          ÷
        </button>
      </div>
      <div className="row">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="operator-button" type="button">
          ×
        </button>
      </div>
      <div className="row">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="operator-button" type="button">
          -
        </button>
      </div>
      <div className="row">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="operator-button" type="button">
          +
        </button>
      </div>
      <div className="row">
        <button className="zero-button" type="button">0</button>
        <button type="button">.</button>
        <button className="equal-button" type="button">=</button>
      </div>
    </div>
  </div>;
};

export default Calculator;
