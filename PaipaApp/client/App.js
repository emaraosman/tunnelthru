import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import 'src/modules/Auth.js' //BEWARE OF THIS LINE MAKE SURE IT IMPORTS CORRECTLY

import SignIn from './src/components/SignIn'


class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SignIn />
        <Text>Hello there</Text>
        <Text>This is the app.js component</Text>
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
