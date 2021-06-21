import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ChecKBox, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  constructor() {
    super()
  }
  
  // Login Screen

  render() {
    return (
      <View style={Styles.container}>
        <TextInput style={Styles.input} placeholder='username' />
        <TextInput style={Styles.input} placeholder='password' 
        secureTextEntry={true}
        />

        <TouchableOpacity>
         <Text style={Styles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text style={Styles.signupText}>Not a member ? SignUp Now</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Styles = StyleSheet.create ({
 container: {
  flex: 1,
  backgroundColor: '#26AE90',
  justifyContent: 'center',
  paddingRight: 20,
  paddingLeft: 20,
 },
 input: {
  backgroundColor: '#fff',
  marginBottom: 20,
  fontSize: 20,
  paddingLeft: 15,
 },
 btnText: {
  backgroundColor: '#ECEEF1',
  paddingBottom: 10,
  paddingTop: 10,
  fontSize: 18,
  marginTop: 25,
  textAlign: 'center',
  color: '#26AE90',
  fontWeight: 'bold',
 },
 signupText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 70,
  textAlign: 'center',
 }
})