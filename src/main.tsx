// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/global.scss';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Cause react tooltip doesn't support react strict mode, take out now and wait for future update
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
