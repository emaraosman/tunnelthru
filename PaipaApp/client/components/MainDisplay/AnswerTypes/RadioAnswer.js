import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';

const RadioAnswer = (props) =>{

  return(
    <View style={styles.container}>
      {props.currentAssessment[props.questionCount].answers.map((answer, index)=>{
        return (
          <TouchableOpacity key={index} style={styles.buttonStyles} onPress={()=>props.logAnswer(answer)}>
            <Text style={styles.buttonText}>{answer}</Text>
          </TouchableOpacity>

        )
      })}
    </View>

  )
}

// SYTLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    width: width,
    paddingRight: 25,
    paddingTop: 10,
  },
  buttonStyles: {
    backgroundColor: 'rgba(45,167,255,1)',
    borderRadius: 23,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 7,
    borderWidth:1,
    borderColor:'rgb(29,132,251)',
  },
  buttonText: {
    textAlign: 'right',
    fontSize: 17,
    color: 'white',
    fontWeight: '600',


  }
});

export default RadioAnswer;
