import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

const SliderAnswer = (props) =>{

  return(
    <View style={styles.container}>
      <Text>{props.currentAssessment[props.questionCount].type}</Text>
    </View>

  )
}

// SYTLES:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#108241',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SliderAnswer;
