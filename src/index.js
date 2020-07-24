import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
      <Routes>
        <Route path="dashboard" element={<Dash />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
