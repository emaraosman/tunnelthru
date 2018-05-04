import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

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
        <Assessment  />
      </View>
    )
  }//end of render
}//end of component

// STYLES:

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

  const styles = StyleSheet.create({
    container: {
      flex: 8,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      width: width,
    },
  });


export default MainDisplayController;
