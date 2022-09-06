import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store.js';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Routett from './component/routes/Routett';
import { BrowserRouter } from 'react-router-dom';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  // <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>

        <App />

      </Provider>
    </AlertProvider>,
  // </BrowserRouter>,
  document.getElementById('root')
);
