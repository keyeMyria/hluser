import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { colors, fonts } from '../styles/Styles';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {  title, onPress } = this.props;
    return(
      <TouchableOpacity
          onPress={() => this.onPress()}>
        <View style={s.button}>
            <Text style={s.title}>{title}</Text>
            <Image source={require('../assets/keyboard_arrow_right.png')} />
        </View>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexDirection: 'row'
  },
  title: {
      fontSize: 14,
      fontFamily:  fonts.hlfont,
      fontWeight: '200',
  }
})
