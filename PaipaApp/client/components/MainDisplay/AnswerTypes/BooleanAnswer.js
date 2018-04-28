import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

const BooleanAnswer = (props) =>{

  return(
    <View style={styles.container}>
      <Button title={"Yes"} onPress={()=>props.logAnswer(true)} />
      <Button title={"No"} onPress={()=>props.logAnswer(false)} />

    </View>

  )
}

// SYTLES:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#108241',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BooleanAnswer;
