import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Dimensions } from 'react-native';

const PreviousQuestion = (props) =>{

  let lastQuestion = props.questionCount - 1

  return(
  <View style={styles.container}>
    {lastQuestion < 0 ? (
      <Text style={styles.previousQuestion}>Previous questions will appear here</Text>
    ):(
      <View onPress={()=>props.prevQuestion()} >
        {/* <Text onPress={()=>props.prevQuestion()} >Previous Question:</Text> */}
        <Text onPress={()=>props.prevQuestion()} style={styles.previousQuestion} >{props.currentAssessment[lastQuestion].question}</Text>
        <Text onPress={()=>props.prevQuestion()} style={styles.previousAnswer} >
          {props.loggedAnswers[lastQuestion] === true ? (<Text>Yes</Text>)
           : props.loggedAnswers[lastQuestion] === false ? (<Text>No</Text>)
           : (<Text>{props.loggedAnswers[lastQuestion]}</Text>)}
         </Text>
      </View>
    )}
  </View>
  )//end of return
}//end of component


// SYTLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245,255,255)',
    // alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
  },
  previousQuestion: {
    fontSize: 19,
    color: 'rgba(80,80,80,0.4)',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  previousAnswer: {
    fontSize: 17,
    color: 'rgba(53, 164, 255, 0.5)',
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginTop: 10,
  },

});

export default PreviousQuestion;
