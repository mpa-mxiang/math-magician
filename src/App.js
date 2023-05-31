import './App.css';
import Calculator from './components/Calculator';
import Quote from './API/quote';

function App() {
  return (
    <div className="App">

      <Calculator />
      <h1>Quote of the Day</h1>
      <Quote />
    </div>
  );
}

export default App;
