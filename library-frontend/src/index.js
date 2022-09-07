import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Routes from './router/Router';


import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDom.render(
  <Provider store={store}>
    <Routes /> 
  </Provider>,
  document.getElementById("root")
)
