import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  welcomeContainer: {
    marginLeft: 20
  },
  formContainer: {

  },
  title: {
    color: 'black',
    marginTop: 100,
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'lightgrey',
    fontSize: 20,
    padding: 10
  }
});
