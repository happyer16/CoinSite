import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

// const counterInitialState = {
//   id : 0,
//   name: 'eth'
// };

const coinsInitialState = {
    coins: []
};

const coin = (state,action) => {
  switch(action.type) {
    case types.ADD_COIN:
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state;
  }
}

function coins(state = coinsInitialState, action){
  console.log(action);
  switch (action.type) {
    case types.ADD_COIN :
      return [
        ...state, coin(undefined,action)
      ];
    case types.COIN_FETCH_SUCCESS :
      return update(state, {
        coins: action.coins
      });

    case types.COIN_REGISTER :
      return update(state, {
        register: {
          status: { $set: 'WAITING' },
          error : { $set: -1 }
        }
      });
    default :
      return state;
  }
}

export default coins;
