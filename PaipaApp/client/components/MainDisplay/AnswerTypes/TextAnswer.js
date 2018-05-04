import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';

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
