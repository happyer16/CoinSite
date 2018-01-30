import * as types from '../actions/ActionTypes';

function coins(state = [], action){

  console.log(state, action);
  switch (action.type) {
    case types.ADD_COIN :
      return update(state,{
        name : state.name
      });
    default :
      return null;
  }
}

export default coins;
