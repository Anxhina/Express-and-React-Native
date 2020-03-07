import { AsyncStorage } from 'react-native';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';


export const profile = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'http://192.168.0.101:3000/users/profile',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

   
  };
};


export const users = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'http://192.168.0.101:3000/users/users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );


   
  };
};





