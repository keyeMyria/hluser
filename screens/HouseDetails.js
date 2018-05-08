import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Buttonicon from '../components/Buttonicon';
import HouseVideo from '../components/HouseVideo';

import { colors, fonts } from '../styles/Styles';

export default class HouseDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View>
        <HouseVideo />
        <Text> {this.props.name} </Text>
        <Buttonicon
                title= "Solicitar disponibilidad"
                color= {colors.orange}
                textcolor={colors.white}
        />
      </View>
    );
  }
}
