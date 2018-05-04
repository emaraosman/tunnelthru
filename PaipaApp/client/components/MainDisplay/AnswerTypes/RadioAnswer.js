import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

const RadioAnswer = (props) =>{

  return(
    <View style={styles.container}>
      {props.currentAssessment[props.questionCount].answers.map((answer, index)=>{
        return (
          <Button key={index} title={`${answer}`} onPress={()=>props.logAnswer(answer)} />
        )
      })}
    </View>

  )
}

// SYTLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,

  },
});

export default RadioAnswer;
