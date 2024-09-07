import axios from 'axios';

export function loginAction(email, password) {
  return async (dispatch) => {
    // const url = 'http://localhost:5000/auth/login';
    const url = process.env.REACT_APP_BACKEND+`/auth/login`;

    dispatch({ type: 'LOGIN_REQUESTED' });

    try {
      const response = await axios.post(url, { email, password });

      // Assuming the API responds with user data, dispatch that to the reducer
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,  // Assuming response.data contains the user object
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: error.response ? error.response.data : 'Login failed',
      });
    }
  };
}


export function registerAction(email, password) {
  return async (dispatch) => {
    const url =process.env.REACT_APP_BACKEND+`/auth/register`

    dispatch({ type: 'REGISTER_REQUESTED' });

    try {
      const response = await axios.post(url, { email, password });

      // Assuming the API responds with user data, dispatch that to the reducer
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: response.data,  // Assuming response.data contains the user object
      });
    } catch (error) {
      dispatch({
        type: 'REGISTER_FAILED',
        payload: error.response ? error.response.data : 'REGISTER failed',
      });
    }
  };
}

export const loginDataOfReset = () => ({
  type: "LOGIN_DATA_OF_RESET",
});

export const rgisterDataOfReset = () => ({
  type: "REGISTER_DATA_OF_RESET",
});




export function resetpasswordAction(email) {
  return async (dispatch) => {
    
    const url =process.env.REACT_APP_BACKEND+`/auth/resetpassword`
    dispatch({ type: 'RESET_REQUESTED' });

    try {
      const response = await axios.post(url,{email:email});


      dispatch({
        type: 'RESET_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'RESET_FAILED',
        payload: error.response ? error.response.data : 'RESET failed failed',
      });
    }
  };
}

export const resetpasswordDataOfReset = () => ({
  type: "RESETPASSWORD_DATA_OF_RESET",
});



export function updatepasswordAction(password,token) {
  return async (dispatch) => {
    
    const url =process.env.REACT_APP_BACKEND+`/auth/updatepassword`
    dispatch({ type: 'UPDATE_REQUESTED' });
    const headers = {
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.put(url,{password:password},{headers});


      dispatch({
        type: 'UPDATE_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_FAILED',
        payload: error.response ? error.response.data : 'RESET failed failed',
      });
    }
  };
}

export const updatepasswordDataOfReset = () => ({
  type: "UPDATEPASSWORD_DATA_OF_RESET",
});