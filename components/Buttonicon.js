import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles/Styles';

export default class Buttonicon extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { title, onPress, color, textcolor } = this.props;
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={[s.container, {backgroundColor:  color}]}>
            <Text style={[s.title, {color: textcolor}]}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 5,
    backgroundColor:  'black',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: fonts.hlfont,
  }
})
