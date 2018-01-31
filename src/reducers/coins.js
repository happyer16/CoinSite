import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

// const counterInitialState = {
//   id : 0,
//   name: 'eth'
// };

function coins(state = [], action){

  console.log('state : ');
  console.log(state);
  console.log('action : ');
  console.log(action);
  switch (action.type) {
    case types.ADD_COIN :
    [
      ...state,
      {
        id: action.id,
        text: action.name,
      }
    ]
    default :
      return state;
  }
}

export default coins;
