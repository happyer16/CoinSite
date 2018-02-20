import axios from 'axios';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_GET_STATUS,
  AUTH_GET_STATUS_SUCCESS,
  AUTH_GET_STATUS_FAILURE,
  AUTH_LOGOUT
} from './ActionTypes';

/* Login */
export function loginRequest(username, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST
    return axios.post('/api/account/signin', { username, password })
    .then((response) => {
      // SUCCEDE
      dispatch(loginSuccess(username));
    }).catch((error) => {
      // FAILED
      dispatch(loginFailure());
    });
  }
}
export const login = () => ({
  type: AUTH_LOGIN
});

export const loginSuccess = (username) => ({
  type: AUTH_LOGIN_SUCCESS,
  username
});

export const loginFailure = (error) => ({
  type: AUTH_LOGIN_FAILURE,
  error
})

/* Register */
export function registerRuquest(username, password) {
  return (dispatch) => {
    // Inform register API is starting
    dispatch(register());

    return axios.post('/api/account/signup', { username, password })
    .then((response) => {
      // SUCCEDE
      dispatch(registerSuccess(username));
    }).catch((error) => {
      // FAILED
      dispatch(registerFailure(error.response.data.code));
    });
  }
}
export const register = () => ({
  type : AUTH_REGISTER
});

export const registerSuccess = () => ({
  type : AUTH_REGISTER_SUCCESS
});

export const registerFailure = () => ({
  type : AUTH_REGISTER_FAILURE
});

/* Get status */
export function getStatusRequest() {
    return (dispatch) => {
      // Inform Get Status API is starting
      dispatch(getStatus());

      return axios.get('/api/account/getInfo')
      .then((response) => {
        dispatch(getStatusSuccess(response.data.info.username));
      }).catch((error) => {
        dispatch(getStatusFailure());
      })
    }
}

export const getStatus = () => ({
  type: AUTH_GET_STATUS
});

export const getStatusSuccess = (username) => ({
  type: AUTH_GET_STATUS_SUCCESS,
  username
});

export const getStatusFailure = () => ({
  type: AUTH_GET_STATUS_FAILURE
});


/* Logout */
export function logoutRequest() {
  return (dispatch) => {
    return axios.post('/api/account/logout')
    .then((response) => {
      dispatch(logout());
    })
  }
}

export const logout = () => ({
  type: AUTH_LOGOUT
});
