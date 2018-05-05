import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component {
  static navigatorStyle= {
    largeTitle: true,
  }
  constructor() {
    super();
  }

  render(){
    return(
      <View>
          <Text> Aplications </Text>
      </View>
    );
  }
}
