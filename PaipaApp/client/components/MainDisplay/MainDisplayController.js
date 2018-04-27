import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

import Assessment from './Assessment';
import Question from './Question';


class MainDisplayController extends Component {
  constructor(props){
    super(props)

    this.state={
      
    }

  }

  // |||||| USE THIS FUNCTION TO HANDLE currentAssessment STATE ||||||:
  // assessmentSelector(){
  //   this.setState({
  //     currentAssessment: selectedAssessment,
  //   })
  // }

  render(){
    return(
      <View style={styles.container}>
        <Text>This is the MainDisplayController Component</Text>
        <Assessment  />
      </View>
    )
  }//end of render
}//end of component

  const styles = StyleSheet.create({
    container: {
      flex: 8,
      backgroundColor: '#009991',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default MainDisplayController;
