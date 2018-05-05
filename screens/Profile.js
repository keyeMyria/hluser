import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Propic from '../components/Propic';

import { colors } from '../styles/Styles';

export default class Profile extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  constructor() {
    super();
  }

  render(){
    return(
      <View style={s.container}>
          <View style={s.container2}>
              <Propic />
          </View>
          <View style={s.container3}>
              <Text> Aqui va puro boton </Text>
          </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whitegray
  },
  container3: {
    flex: 8,
    backgroundColor: 'gray',
  }
})
