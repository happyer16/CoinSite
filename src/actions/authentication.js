import axios from 'axios';

export function loginRequest(username, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST
    return axios.post('/api/account/signin', { username, password })
    .then((response) => {
      // SUCCEDD
      dispatch(loginSuccess(username));
    }).catch((error) => {
      // FAILED
      dispatch(loginFailure());
    });
  };
}
