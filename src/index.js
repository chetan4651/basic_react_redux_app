import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import App from './modules/app';
import { createStore } from 'redux';
import userReducer from './modules/reducer/userReducer';
import { Provider } from 'react-redux';


var store = createStore(userReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
