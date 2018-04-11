import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';

class Auth {
  // thank you to Vlad and his awesome auth skills --> https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
  static authenticateToken(token) {
    AsyncStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    return AsyncStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    AsyncStorage.removeItem('token');
  }

  static getToken() {
    return AsyncStorage.getItem('token');
  }

}

export default Auth;

// Legend:
// authenticateToken -- sets the token it's passed in session storage.
// isUserAuthenticated -- returns a boolean, true or false, that represents whether or not there is currently a token stored in storage.
// deauthenticateUser -- removes the token from the session storage, essentially logging out the user.
// getToken -- gets the token from storage so we can use it.
// We write these in a module so we can use that module in multiple places, if necessary.
