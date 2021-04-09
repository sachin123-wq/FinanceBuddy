import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './store';
import './main.scss';

ReactDOM.render(
  <Routes store={store}/>, 
  document.getElementById("app")
);