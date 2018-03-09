import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App  from 'App';
import { addCoin } from './actions';
import { Login, Register } from './containers';
import configureStore from './store/index';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const store = configureStore(reducers
// 	,{
// 	"coins" : [
// 		{"id":14, "name":"XMR", "coinAmount":100, "buyAvg":100000, "buySum":10000000, "evaluationAmount":1000000000},
// 		{"id":24, "name":"LSK", "coinAmount":1000, "buyAvg":100000, "buySum":100000000, "evaluationAmount":5000000000},
// 		{"id":34, "name":"WAVES", "coinAmount":2, "buyAvg":5000, "buySum":10000, "evaluationAmount":10000000}
// 	]
// }
);
function listen(){
  console.log('=========================');
  console.log('index.js store change!!!');
  console.log(store.getState());
  console.log('-------------------------');
}

store.subscribe(listen);
// store.dispatch(addCoin('eth 1000000000$'));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
		<Router history = { browserHistory }>
			<Route path = "/" component = { App }>
				<Route path = "login" component = { Login }/>
				<Route path = "register" component = { Register }/>
			</Route>
		</Router>
	</Provider>,
  rootElement
);
