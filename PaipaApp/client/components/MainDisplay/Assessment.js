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
      loggedAnswers:[],
    }

    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.logAnswer = this.logAnswer.bind(this);
  }

  prevQuestion(){
    let lastQ = this.state.questionCount - 1;
    this.setState({
      questionCount: lastQ,
    })
  }

  nextQuestion(){
    let nextQ = this.state.questionCount + 1;
    this.setState({
      questionCount: nextQ,
    })
  }

  logAnswer(event){
    let updatedState = this.state.loggedAnswers;
    updatedState[this.state.questionCount] = event;
    this.setState({
      loggedAnswers: updatedState,
    })
    console.log(this.state.loggedAnswers)
    this.nextQuestion();
  }



  render(){
    return (
      <View>
      {this.state.questionCount<this.state.currentAssessment.length-1 ? (

        <View style={styles.container}>

          <PreviousQuestion
            currentAssessment={this.state.currentAssessment}
            questionCount={this.state.questionCount}
            prevQuestion={this.prevQuestion}
            loggedAnswers={this.state.loggedAnswers}
          />

          <Question
            currentAssessment={this.state.currentAssessment}
            questionCount={this.state.questionCount}
          />

          <Answers
            currentAssessment={this.state.currentAssessment}
            questionCount={this.state.questionCount}
            nextQuestion={this.nextQuestion}
            logAnswer={this.logAnswer}
          />
          <Text>{this.state.loggedAnswers}</Text>

        </View>

      ):(
        <Text>You are done with the assessment</Text>
      )}
      </View>
    )//end of return
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
