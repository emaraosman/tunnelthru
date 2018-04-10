import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import 'src/modules/Auth.js' //BEWARE OF THIS LINE MAKE SURE IT IMPORTS CORRECTLY


class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to OnTrack</Text>
        <Text>Sign in form will go here</Text>
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

export default SignIn
