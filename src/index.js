import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

//import Service from './service.js';

import './index.scss';
import './main.scss';

/*
  GetImage ==> Service.getImageItems(number)
*/

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('logo').src = './images/logo.svg';
  
  ReactDOM.render(<App />, document.getElementById('reactApp'));

});




