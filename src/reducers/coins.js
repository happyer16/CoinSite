import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

// const counterInitialState = {
//   id : 0,
//   name: 'eth'
// };

const initialState = {
  post: {
    status: 'INIT',
    error: -1
  },
  coins : [
		{"id":14, "name":"XMR", "coinAmount":100, "buyAvg":100000, "buySum":10000000, "evaluationAmount":1000000000},
		{"id":24, "name":"LSK", "coinAmount":1000, "buyAvg":100000, "buySum":100000000, "evaluationAmount":5000000000},
		{"id":34, "name":"WAVES", "coinAmount":2, "buyAvg":5000, "buySum":10000, "evaluationAmount":10000000}
	]
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

function coins(state, action){
  // console.log('============START==================')
  // console.log('reducers - coins.js')
  // console.log(action.type);
  // console.log(state);
  // console.log('===============END================')

  if(typeof state === "undefined")
    state = initialState;

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
        post: {
          status: { $set: 'WAITING' },
          error : { $set: -1 }
        }
      });
    default :
      return state;
  }
}

export default coins;
