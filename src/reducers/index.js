import { combineReducers } from 'redux'
import coins from './coins'
import authentication from './authentication'

export default combineReducers({
  coins, authentication
});
