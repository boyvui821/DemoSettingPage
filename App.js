/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Dimensions
} from 'react-native';

import Navigation from './Navigation'

export default class App extends Component{
  render() {
    return (
      <Navigation />
    );
  }
}
