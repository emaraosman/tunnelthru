import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Dimensions } from 'react-native';

const Question = (props) =>{

  return(
    <View style={styles.container}>
      <Text style={styles.question}>{props.currentAssessment[props.questionCount].question}</Text>
    </View>

  )//end of return
}//end of component

// SYTLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(235,255,255)',
    justifyContent: 'flex-end',
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
  },
  question: {
    fontSize: 23,
    color: 'rgb(50,50,50)',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },

});

export default Question;
