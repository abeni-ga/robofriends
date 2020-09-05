import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {searchRobots,requestRobots} from './reducers'
import 'tachyons';

const rootReducers = combineReducers({searchRobots,requestRobots})
const logger = createLogger()
const store = createStore(rootReducers,applyMiddleware(thunkMiddleware(),logger));

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
