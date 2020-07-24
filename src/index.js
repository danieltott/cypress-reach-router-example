import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

let Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="dashboard" className="dashlink">
        Dashboard
      </Link>
    </nav>
  </div>
);

let Dash = () => <div className="dashboard">Dash</div>;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
