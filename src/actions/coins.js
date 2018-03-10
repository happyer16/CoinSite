import axios from 'axios';
import {
  COIN_LIST,
  COIN_LIST_SUCCESS,
  COIN_LIST_FAILURE,
  COIN_REGISTER,
  COIN_REGISTER_SUCCESS,
  COIN_REGISTER_FAILURE
} from './ActionTypes';

export function infoRequest(coinname) {
  return (dispatch) => {
    return
  }
}

export function coinListRequest() {
    return (dispatch) => {
      // Inform coinListRequest API is starting
      dispatch(coinList());
      return axios.get('/api/coin')
     .then((response) => {
        // SUCCESE
         dispatch(coinListSuccess(response.data));
        // FIXME dispatch(fetchSuccess(response.data.coins));
      }).catch((error) => {
        // FAILED
        dispatch(coinListFailure(error));
      });
    }
}

export const coinList = () => ({
  type : COIN_LIST
});

export const coinListSuccess = (coins) => ({
  type : COIN_LIST_SUCCESS,
  coins
});

export const coinListFailure = () => ({
  type : COIN_LIST_FAILURE
});

/* ADD COIN */
export function coinRegisterRequest(coin) {
  return (dispatch) => {
    // Inform addcoin API is starting
    dispatch(register());

    return axios.post('/api/coin', { coin })
    .then((response) => {
      // SUCCESE
      dispatch(registerSuccess());
    }).catch((error) => {
      // FAILED
      dispatch(registerFailure(error.response.data.code));
    });
  }
}

export const register = () => ({
  type : COIN_REGISTER
});

export const registerSuccess = () => ({
  type : COIN_REGISTER_SUCCESS
});

export const registerFailure = () => ({
  type : COIN_REGISTER_FAILURE
});
