import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../styles/Styles';

export default class Propic extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={s.container}>
      </View>
    );
  }
}

CIRCLE = 150

const s = StyleSheet.create({
  container: {
    height: CIRCLE,
    width: CIRCLE,
    borderRadius: CIRCLE / 2,
    backgroundColor: 'gray'
  }
})
