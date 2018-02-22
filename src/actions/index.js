import * as types from './ActionTypes';

let nextCoinId = 0
export const addCoin = (name) => ({
  type : types.ADD_COIN,
  id : nextCoinId++,
  name
});
