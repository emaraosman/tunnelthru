import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Dimensions } from 'react-native';

import Auth from './modules/Auth.js';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import MainDisplayController from './components/MainDisplay/MainDisplayController';


class App extends Component {
  constructor(){
    super()
    this.state={
      auth: Auth.isUserAuthenticated('token'),
      userApiData: [], // holds user api data
      userApiDataLoaded: null,
      signInUsername: "",
      signInPassword: "",
      signInComplete: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
  }

  // async authenticateToken(token) {
  //   try{
  //     await AsyncStorage.setItem('token', token)
  //     .then((values)=>{
  //       if(values){
  //         var result = values;
  //       }
  //       console.log('Final: ', result);
  //
  //     })
  //   }catch(error){
  //     console.log('AsyncStorage -- authenticateToken error: ' + error.message);
  //   }
  //
  //   return results
  // }
  //
  // async isUserAuthenticated() {
  //   try{
  //     await AsyncStorage.getItem('token')
  //     .then((values)=>{
  //       if(values){
  //         try{
  //           var result = JSON.parse(values)
  //         }
  //       }
  //       console.log("values of isUserAuthenticated: ", result)
  //     })
  //   }catch(error){
  //     console.log('AsyncStorage -- isUserAuthenticated error: ' + error.message);
  //   }
  //   return (result !== null)
  // }
  //
  // async deauthenticateUser() {
  //   try {
  //     await AsyncStorage.removeItem('token')
  //     .then((values)=>{
  //       if(values){
  //         var result = values
  //       }
  //       console.log("values of deauthenticateUser: ", result)
  //     });
  //   }catch(error){
  //     console.log('AsyncStorage -- deauthenticateUser error: ' + error.message);
  //   }
  //   return result
  // }
  //


  componentDidMount() {
    // fetch('http://localhost:3000/profile', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Token ${this.getToken()}`,
    //     token: `${this.getToken()}`,
    //   }
    // }).then(res => res.json())
    // .then(res => {
    //   console.log(res.token)
    //   this.setState({
    //     userApiData:"user data will go here",
    //   })
    // })
    console.log("componentDidMount State auth:", this.state.auth)
    // this.getToken.toky
  }

  handleLogin(){
    fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        Auth.authenticateToken('token',res.token);
        this.setState({
          auth: Auth.isUserAuthenticated('token'),
          signInUsername: "",
          signInPassword: "",
          // profileDataLoaded:true,
        })
      }
      else{
        alert("login failed")
      }
    }).catch(err => {
      console.log(err);
    })
    console.log("handleLogin authState:" + this.state.auth)

  }

  handleLogout() {
  fetch('http://localhost:3000/logout', {
    method: 'DELETE',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${Auth.getToken('token')}`,
      token: Auth.getToken('token'),
    }
  }).then(res => {
    Auth.deauthenticateUser(Auth.getToken('token'));
    this.setState({
      auth: Auth.isUserAuthenticated('token'),
      signInUsername: "",
      signInPassword: "",
    })
  }).catch((err) => {
    console.log(err)
  })
  console.log("Auth after LogOut: ",this.state.auth)
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



  render() {
    return (
      <View style={styles.container}>
        {this.state.auth ? (

          <View style={styles.container}>

              <View>
            <NavBar
              handleLogout={this.handleLogout}
            />
            <MainDisplayController />
            </View>

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

// STYLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    alignSelf: "stretch",
    width: width,
    height: height,
  },
});

export default App;
