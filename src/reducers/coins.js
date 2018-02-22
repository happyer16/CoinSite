import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

// const counterInitialState = {
//   id : 0,
//   name: 'eth'
// };

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
function coins(state = [], action){
  switch (action.type) {
    case types.ADD_COIN :
      return [
        ...state, coin(undefined,action)
      ];

    default :
      return state;
  }
}

export default coins;
