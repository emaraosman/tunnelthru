import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Dimensions } from 'react-native';

const Question = (props) =>{

  return(
    <View style={styles.container}>
      <Text>{props.currentAssessment[props.questionCount].question}</Text>
    </View>

  )//end of return
}//end of component

// SYTLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#108241',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
});

export default Question;
