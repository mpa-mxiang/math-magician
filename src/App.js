import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './API/quote';
import Home from './Home';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Routes>
    </div>
  </Router>
);

export default App;
