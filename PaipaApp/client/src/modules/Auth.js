class Auth {
  // thank you to Vlad and his awesome auth skills --> https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
  static authenticateToken(token) {
    sessionStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    return sessionStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    sessionStorage.removeItem('token');
  }

  static getToken() {
    return sessionStorage.getItem('token');
  }

}

export default Auth;

// Legend:
// authenticateToken -- sets the token it's passed in session storage.
// isUserAuthenticated -- returns a boolean, true or false, that represents whether or not there is currently a token stored in storage.
// deauthenticateUser -- removes the token from the session storage, essentially logging out the user.
// getToken -- gets the token from storage so we can use it.
// We write these in a module so we can use that module in multiple places, if necessary.
