import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div id="full-screen">
      <Header />
      <App />
      <Footer />
    </div>,
  document.getElementById('root')
);

serviceWorker.register();
