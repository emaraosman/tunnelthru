import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

const BooleanAnswer = (props) =>{


  return(
    <View style={styles.container}>
      <Button title={"Yes"} onPress={()=>props.logAnswer(true)} />
      <Button title={"No"} onPress={()=>props.logAnswer(false)} />

    </View>

  )//end of return
}//end of component

// SYTLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
});

export default BooleanAnswer;
