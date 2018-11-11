import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
//Development only axios helper
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk), +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render(
<Provider store = {store}><App /></Provider>,
     document.querySelector('#root')
     );

    