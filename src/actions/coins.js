import axios from 'axios';
import {
  COIN_FETCH,
  COIN_FETCH_SUCCESS,
  COIN_FETCH_FAILURE,
  COIN_REGISTER,
  COIN_REGISTER_SUCCESS,
  COIN_REGISTER_FAILURE
} from './ActionTypes';

export function infoRequest(coinname) {
  return (dispatch) => {
    return
  }
}

export function fetchCoins() {
    return (dispatch) => {
      // Inform fetchCoins API is starting
      dispatch(fetch());
      return axios.get('/api/coin/fetch')
     .then((response) => {
        // SUCCESE
         dispatch(fetchSuccess(response));
        // FIXME dispatch(fetchSuccess(response.data.coins));
      }).catch((error) => {
        // FAILED
        dispatch(fetchFailure(error));
      });
    }
}

export const fetch = () => ({
  type : COIN_FETCH
});

export const fetchSuccess = (coins) => ({
  type : COIN_FETCH_SUCCESS,
  coins
});

export const fetchFailure = () => ({
  type : COIN_FETCH_FAILURE
});

/* ADD COIN */
export function registerRequest(coinname, amount) {
  return (dispatch) => {
    // Inform addcoin API is starting
    dispatch(register());

    return axios.post('/api/coin/register', { coinname, amount })
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
