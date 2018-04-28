import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button } from 'react-native';

class TextAnswer extends Component {
  constructor(props){
    super(props)
    this.state={
      text: "",
    }

  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button onPress={()=>this.props.logAnswer(this.state.text)} title={"OK"}/>
      </View>

    )
  }
}

// SYTLES:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#108241',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textBox: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    minWidth: 250,
    borderColor: 'black',
    borderWidth:1,
  },
});

export default TextAnswer;
