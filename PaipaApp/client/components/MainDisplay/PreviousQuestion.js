import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Dimensions } from 'react-native';

const PreviousQuestion = (props) =>{

  let lastQuestion = props.questionCount - 1

  return(
  <View style={styles.container}>
    {lastQuestion < 0 ? (
      <Text>Previous questions will appear here</Text>
    ):(
      <View onPress={()=>props.prevQuestion()} >
        <Text onPress={()=>props.prevQuestion()} >Previous Question:</Text>
        <Text onPress={()=>props.prevQuestion()} >{props.currentAssessment[lastQuestion].question}</Text>
        <Text onPress={()=>props.prevQuestion()} >
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
});

export default PreviousQuestion;
