import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Propic from '../components/Propic';
import MenuButton from '../components/MenuButton';

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
              <Text style={s.username}> Francisco Jesus Chim Vera </Text>
          </View>
          <View style={s.container3}>
              <MenuButton  title="Verificación de identidad" navigate="hl.Verify"/>
              <MenuButton  title="Seguro Houselike" navigate="hl.Verify"/>
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
  },
  username: {
    marginTop: 10,
  },
  container3: {
    flex: 8,
    marginTop: 15,
    marginHorizontal: 25
  }
})
