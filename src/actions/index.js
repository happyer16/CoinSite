import * as types from './ActionTypes';

export const addCoin = (name) => ({
  type : types.ADD_COIN,
  name
});
