import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';



const Answers = (props)=>{

  let answerChoice = null
  switch(this.props.currentAssessment[this.props.questionCount].type){
    case "boolean":
      answerChoice = (
        <BooleanAnswer

        />
      )
      break;
    case "text":
      answerChoice = (
        <TextAnswer

        />
      )
      break;
    case "slider":
      answerChoice = (
        <SliderAnswer

        />
      )
      break;
    case "radio":
      answerChoice = (
        <RadioAnswer

        />
      )

  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Question Answers here</Text>

        {answerChoice}
      </View>
    )
  }

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
