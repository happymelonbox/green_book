import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App';
import Navbar from './containers/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="home-main">
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <App />
        </Route>
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
