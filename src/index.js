import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    <div className="google-signin">
      <Login />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

