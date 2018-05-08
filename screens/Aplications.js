import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {inject, observer} from "mobx-react/native";

import { colors, fonts } from '../styles/Styles';

@inject('store') @observer
export default class Aplications extends React.Component {
  static navigatorStyle = {
    largeTitle: true,
    navBarNoBorder: true,
  }
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={s.container}>
            <View style={s.containermessage}>
              <Text style={s.nohousetext}> No has solicitado rentar casa aún </Text>
              <Text style={s.nohousesubtext}> para comenzar busca nuestras casas disponibles en la sección "Buscar" </Text>
            </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containermessage: {
      margin: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    nohousetext: {
      fontFamily: fonts.hsfont,
      fontSize: 18,
      fontWeight: "800",
      color: colors.semiblack
    },
    nohousesubtext: {
      marginTop: 3,
      textAlign: 'center',
      fontFamily: fonts.hsfont,
      fontSize: 12,
      fontWeight: "600",
      color: colors.grayintense
    }
});
