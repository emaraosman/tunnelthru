import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// import 'src/modules/Auth.js' //BEWARE OF THIS LINE MAKE SURE IT IMPORTS CORRECTLY


const SignIn = (props) =>{
  //props: handleLogin, signInUsername, signInPassword



    return (
      <View style={styles.container}>
        <Text>Welcome to OnTrack: {props.signInUsername}</Text>
        <Text>Welcome to OnTrack: {props.signInPassword}</Text>


          <TextInput style={styles.textInput} type="text" autoCapitalize = 'none' name="signInUsername" value={props.signInUsername}
            onChangeText={(event)=>{props.handleUsernameInputChange(event)}} placeholder="Username"
          />
          <TextInput style={styles.textInput} type="text" autoCapitalize = 'none' secureTextEntry={true} name="signInPassword" value={props.signInPassword}
            onChangeText={(event)=>{props.handlePasswordInputChange(event)}} placeholder="Password"
          />
          <Button onPress={()=>props.handleLogin()} title="Submit" />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 180,
    height: 60,

  }
});

export default SignIn;
