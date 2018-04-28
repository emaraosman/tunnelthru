import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RadioAnswer;
