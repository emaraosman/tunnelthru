import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Auth from './modules/Auth.js';

import SignIn from './components/SignIn'


class App extends Component {
  constructor(){
    super()
    this.state={
      auth: false,
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
            <Text>Hello there</Text>
            <Text>This is the app.js component</Text>
            <Text>Here we will render the MainDisplay component and NavBar</Text>
          </View>
        ):(
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
  },
});

export default App
