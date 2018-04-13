import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const NavBar = (props) =>{

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ONTRACK</Text>
      <Button onPress={console.log("hello")} title="Menu"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4902f4',
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    maxHeight: 50,
  },
  logo:{
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
export default NavBar;
