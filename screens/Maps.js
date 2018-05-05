/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import Mapbox from '@mapbox/react-native-mapbox-gl';

import { colors } from '../styles/Styles';

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

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
    )
  }



  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={'mapbox://styles/fcochimvera/cjgjmepw9002h2sppbncbunal'}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}
            showUserLocation={true}>
            {this.renderAnnotations()}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
