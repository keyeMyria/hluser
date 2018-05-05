import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {inject, observer} from "mobx-react/native";

@inject('store') @observer
export default class Aplications extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View>
          <Text> {this.props.store.counter} </Text>
      </View>
    );
  }
}
