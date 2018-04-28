import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, Button, View, Slider } from 'react-native';

class SliderAnswer extends Component{
  constructor(props){
    super(props)

    this.state={
      value:0,
    }
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <Text style={styles.text}>{String(this.state.value)}</Text>
      <Slider
        style={styles.slider}
        step={1}
        maximumValue={400}
        onValueChange={this.change.bind(this)}
        value={this.state.value}
      />
      <Button onPress={()=>this.props.logAnswer(this.state.value)} title={"OK"} />
    </View>
    )
  }
}

// SYTLES:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  slider:{
    width:200,
  },
});

export default SliderAnswer;
