import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';
import coinApp from './reducers';
import { addCoin } from './actions';

const store = createStore(coinApp);
function listen(){
  console.log('=========================');
  console.log('index.js store change!!!');
  console.log(store.getState());
  console.log('-------------------------');
}

store.subscribe(listen);
store.dispatch(addCoin('eth 1000000000$'));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  rootElement
);
