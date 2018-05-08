import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles/Styles';

export default class HouseVideo extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { title, onPress, color, textcolor } = this.props;
    return(
        <View style={s.container}>
        </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 5,
    backgroundColor:  colors.grayintense,
    margin: 20,
  },
})
