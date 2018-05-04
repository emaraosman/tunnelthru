import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import BooleanAnswer from './AnswerTypes/BooleanAnswer';
import TextAnswer from './AnswerTypes/TextAnswer';
import SliderAnswer from './AnswerTypes/SliderAnswer';
import RadioAnswer from './AnswerTypes/RadioAnswer';


const Answers = (props)=>{


// answerChoice will be returned/rendered, and this switch statement will
// decide which answerChoice component gets shown.

  let answerChoice = null
  switch(props.currentAssessment[props.questionCount].type){
    case "boolean":
      answerChoice = (
        <BooleanAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
          logAnswer={props.logAnswer}
        />
      )
      break;
    case "text":
      answerChoice = (
        <TextAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
          logAnswer={props.logAnswer}
        />
      )
      break;
    case "slider":
      answerChoice = (
        <SliderAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
          logAnswer={props.logAnswer}
        />
      )
      break;
    case "radio":
      answerChoice = (
        <RadioAnswer
          currentAssessment={props.currentAssessment}
          questionCount={props.questionCount}
          logAnswer={props.logAnswer}
        />
      )

  }



  return(
    <View style={styles.container}>

      {answerChoice}
    </View>
  )// end of return
}//end of component


// STYLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 0,
    width: width,
  },
});

export default Answers
