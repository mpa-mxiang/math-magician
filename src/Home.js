import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
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
  </div>
);

export default Home;
