import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

import Auth from './modules/Auth.js';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import MainDisplayController from './components/MainDisplay/MainDisplayController';


class App extends Component {
  constructor(){
    super()
    this.state={
      auth: true,
      userApiData: [], // holds user api data
      userApiDataLoaded: null,
      signInUsername: "",
      signInPassword: "",
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);

  }


  handleUsernameInputChange(event){
    this.setState({
      signInUsername:event,
    })
  }

  handlePasswordInputChange(event){
    this.setState({
      signInPassword:event,
    })
  }


  handleLogin(event) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      alert("res from login :",res);
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          name:res.name,
          // profileDataLoaded:true,
        })
      }
      else{
        alert("login failed")
      }
    }).catch(err => {
      console.log(err);
    })
  }





  render() {
    return (
      <View style={styles.container}>
        {this.state.auth ? (
          <View style={styles.container}>
            <NavBar />
            <MainDisplayController />
          </View>
        ):(
          // If you are not signed in the below will render
          <View style={styles.container}>
            <SignIn
              handleUsernameInputChange={this.handleUsernameInputChange}
              handlePasswordInputChange={this.handlePasswordInputChange}
              handleLogin={this.handleLogin}
              signInUsername={this.state.signInUsername}
              signInPassword={this.state.signInPassword}
            />
          </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
});

export default App;
