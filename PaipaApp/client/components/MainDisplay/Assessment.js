import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';



class Assessment extends Component{
  constructor(){
    super()

    this.state={

    }

  }

  render(){
    return (
      <View>
        <Text>Assessment goes here</Text>
      </View>
    )
  }//end of render
}//end of Component

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#108241',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Assessment
