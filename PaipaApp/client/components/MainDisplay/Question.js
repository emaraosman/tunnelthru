import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

const Question = (props) =>{

  return(
    <View style={styles.container}>
      <Text>{props.currentAssessment[props.questionCount].question}</Text>
    </View>

  )
}

// SYTLES:
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#108241',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Question;
