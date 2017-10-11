import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username or email"
          placeholderTextColor='white'
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor='white'
          style={styles.input}
        />
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 300
  },
  forgotContainer: {
    marginLeft: 215
  },
  buttonContainer: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    marginTop: 90
  },
  forgotText: {

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: 'red',
    marginBottom: 20
  }
});
