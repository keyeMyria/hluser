
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {inject, observer} from "mobx-react/native";
import { Navigation } from 'react-native-navigation';


import { colors, fonts } from '../styles/Styles';

Mapbox.setAccessToken('pk.eyJ1IjoiZmNvY2hpbXZlcmEiLCJhIjoiY2pnNHhpc3RkMWZlcDMzeGYzemI5dXhxcCJ9.UZ_9JEKLgZGM-89Rek1MFA');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

@inject('store') @observer
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



  showDetails = (house) => {
    const { name } = house;
    this.props.navigator.push({
      screen: 'hl.HouseDetails',
      passProps: { name },
    });
  }

  Login = () => {
    this.props.navigator.showModal({
        screen: 'hl.Login', // unique ID registered with Navigation.registerScreen
        title: 'Modal', // title of the screen as appears in the nav bar (optional)
        animationType: 'none' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
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

//'mapbox://styles/fcochimvera/cjgjmepw9002h2sppbncbunal'





  render() {
    const annotations = this.props.store.merida.map((house) =>
                              <Mapbox.PointAnnotation
                                    key={house.key}
                                    id={house.id}
                                    coordinate={[house.long, house.lat]}
                                    selected={false}>
                                    <TouchableOpacity onPress={() => this.showDetails(house)}>
                                      <View style={s.annotationContainer}>
                                            <View style={s.annotationFill} />
                                      </View>
                                    </TouchableOpacity>
                                    <Mapbox.Callout title='Look! An annotation!' />
                            </Mapbox.PointAnnotation> );
        if(this.props.store.logged === false){
              this.Login();
      } return (
      <View style={s.container}>
              <View style={s.selector}>
                  <Text style={s.selectortext}> Méridaaaa </Text>
            </View>
        <Mapbox.MapView
            styleURL={'mapbox://styles/fcochimvera/cjgy4zj7e00032tr2ubussa26'}
            zoomLevel={12}
            centerCoordinate={[this.state.longitude, this.state.latitude]}
            style={s.map}
            showUserLocation={true}>
            {annotations}
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
