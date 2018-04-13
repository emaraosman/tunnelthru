import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

import Assessment from './Assessment'

class MainDisplayController extends Component {
  constructor(props){
    super(props)

    this.state={

    }

  }

  render(){
    return(
      <View style={styles.container}>
        <Text>This is the MainDisplayController Component</Text>
        <Assessment />
        <Text>hello</Text>
      </View>
    )
  }//end of render
}//end of component

  const styles = StyleSheet.create({
    container: {
      flex: 8,
      backgroundColor: '#108241',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default MainDisplayController;
