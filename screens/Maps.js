
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import Mapbox from '@mapbox/react-native-mapbox-gl';

import { colors, fonts } from '../styles/Styles';

Mapbox.setAccessToken('pk.eyJ1IjoiZmNvY2hpbXZlcmEiLCJhIjoiY2pnNHhpc3RkMWZlcDMzeGYzemI5dXhxcCJ9.UZ_9JEKLgZGM-89Rek1MFA');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Maps extends React.Component  {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props){
    super(props);
    this.state = {
      latitude: Number (null),
      longitude: Number(null),
      error: null,
    };
  }


  login = () => {
    firebase.auth().signInAnonymously()
  .then((user) => {
    console.log(user.isAnonymous);
  });
  }

  renderAnnotations () {
    return (
      <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[11.254, 43.772]}>

        <View style={s.annotationContainer}>
          <View style={s.annotationFill} />
        </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
    )
  }

  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
  }



  render() {
    return (
      <View style={s.container}>
        <View style={s.selector}>
            <TouchableOpacity>
              <Text style={s.selectortext}> Mérida </Text>
            </TouchableOpacity>
        </View>
        <Mapbox.MapView
            styleURL={'mapbox://styles/fcochimvera/cjgjmepw9002h2sppbncbunal'}
            zoomLevel={12}
            centerCoordinate={[this.state.longitude, this.state.latitude]}
            style={s.map}
            showUserLocation={true}>
            {this.renderAnnotations()}
        </Mapbox.MapView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  selector: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  selectortext: {
    fontFamily: fonts.hlfont,
    fontSize: 18,
    fontWeight: '600'
  },
  map: {
    flex: 8
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orangeblur,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: colors.orange
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.orange,
    transform: [{ scale: 0.6 }],
  }
});
