import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Home from './Home';
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';

function Root() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
