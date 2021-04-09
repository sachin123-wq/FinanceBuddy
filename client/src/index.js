import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './store';
import './main.css';

ReactDOM.render(
  <Routes store={store}/>, 
  document.getElementById("app")
);