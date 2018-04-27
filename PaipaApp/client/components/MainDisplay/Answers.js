import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

import BooleanAnswer from './AnswerTypes/BooleanAnswer';
import TextAnswer from './AnswerTypes/TextAnswer';
import SliderAnswer from './AnswerTypes/SliderAnswer';
import RadioAnswer from './AnswerTypes/RadioAnswer';





const Answers = (props)=>{

  let answerChoice = null
  switch(props.currentAssessment[props.questionCount].type){
    case "boolean":
      answerChoice = (
        <BooleanAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
        />
      )
      break;
    case "text":
      answerChoice = (
        <TextAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
        />
      )
      break;
    case "slider":
      answerChoice = (
        <SliderAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
        />
      )
      break;
    case "radio":
      answerChoice = (
        <RadioAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
        />
      )

  }

  return(
    <View style={styles.container}>
      <Text>Question Answers here</Text>

      {answerChoice}
    </View>
  )


}

// STYLES:
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#009291',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
});

export default Answers
