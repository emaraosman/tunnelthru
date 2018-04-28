import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

const PreviousQuestion = (props) =>{

  let lastQuestion = props.questionCount - 1

  return(
    <View style={styles.container}>
    {lastQuestion < 0 ? (
      <Text>No previous question</Text>
    ):(
      <View>
        <Text onPress={()=>props.prevQuestion()} >{props.currentAssessment[lastQuestion].question}</Text>
        <Text>{props.loggedAnswers[lastQuestion]}</Text>
      </View>
    )}
</View>
)
}

// SYTLES:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#109261',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PreviousQuestion;
