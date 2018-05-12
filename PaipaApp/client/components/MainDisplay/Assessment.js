import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import Auth from '../../modules/Auth.js';
import PreviousQuestion from './PreviousQuestion';
import Question from './Question';
import Answers from './Answers';

// ASSESSMENT FILES:
import generalAssessmentQuestions from '../../modules/generalAssessmentQuestions';

class Assessment extends Component{
  constructor(props){
    super(props)

    this.state={
      questionCount: 2,
      currentAssessment: generalAssessmentQuestions,
      loggedAnswers:[],
    }

    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.logAnswer = this.logAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(data) {
    fetch('http://localhost:3000/generalassessments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      },
      body: JSON.stringify({
        generalassessments: {
          name: data[0],
          age: data[1],
          ethnicity: data[2],
          weight: data[3],
          height: data[4],
          arthritis: data[5],
          hypertension: data[6],
          cholesterol: data[7],
          chd: data[8],
          diabetes: data[9],
          copd: data[10],
          alzheimers: data[11],
          familyarthritis: data[12],
          familyhypertension: data[13],
          familycholesterol: data[14],
          familychd: data[15],
          familydiabetes: data[16],
          familycopd: data[17],
        }
      }),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));
  }


  render(){
    return (
      <View>
      {this.state.questionCount<this.state.currentAssessment.length ? (

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

        </View>

      ):(
        <View>
          <Text>You are done with the assessment</Text>
          <Button title={"Submit"} onPress={()=>this.handleSubmit(this.state.loggedAnswers)} />
        </View>
      )}
      </View>
    )//end of return
  }//end of render
}//end of Component

// STYLES:

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


export default Assessment
