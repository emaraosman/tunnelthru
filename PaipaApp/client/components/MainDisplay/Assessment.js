import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

import PreviousQuestion from './PreviousQuestion';
import Question from './Question';
import Answers from './Answers';

// ASSESSMENT FILES:
import generalAssessmentQuestions from '../../modules/generalAssessmentQuestions';

class Assessment extends Component{
  constructor(props){
    super(props)

    this.state={
      questionCount: 0,
      currentAssessment: generalAssessmentQuestions,
    }

  }

  render(){
    return (
      <View style={styles.container}>

        <PreviousQuestion
          currentAssessment={this.state.currentAssessment}
          questionCount={this.state.questionCount}
        />

        <Question
          currentAssessment={this.state.currentAssessment}
          questionCount={this.state.questionCount}
        />

        <Answers
          currentAssessment={this.state.currentAssessment}
          questionCount={this.state.questionCount}
        />




      </View>
    )
  }//end of render
}//end of Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008241',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Assessment
