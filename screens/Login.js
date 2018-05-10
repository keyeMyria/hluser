import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput, ActivityIndicator, Image } from 'react-native';
import firebase from 'react-native-firebase';
import { Navigation } from 'react-native-navigation';
import { inject, observer } from 'mobx-react/native';
import Buttonicon from '../components/Buttonicon';

import { colors, fonts } from '../styles/Styles';

@inject('store') @observer
export default class Login extends React.Component {
  static navigatorStyle = {
    navBarHidden : true,
  }

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email : "fcochim@icloud.com",
      password: "",
    };
  }


  componentDidMount(){
    this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
      this.props.store.user = changedUser;
    });
  }

  componentWillUnmount(){
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  createUser = () => {
    firebase.auth().createUserWithEmailAndPassword( this.state.email, this.state.password )
    .then((loggedUser) => {
        this.props.store.loading = true;
         this.props.store.user = loggedUser;
         console.log (`Register whit user :  ${JSON.stringify(loggedUser.toJSON())}`);
    }).catch((error) => {
       const errorMessage = error.message;
       const errorCode = error.code;
        console.log(`Register fail with error: ${error}`);
          Alert.alert(
              'Alert Title',
              errorMessage + errorCode,
                        [
                                {text: 'ok', onPress: () => console.log('Ask me later pressed')},
                        ],
                        { cancelable: false }
          );
    });
}


login = () => {
  this.props.store.loading = true;
  firebase.auth().signInWithEmailAndPassword( this.state.email, this.state.password )
  .then((loggedUser) => {
        this.props.store.user = loggedUser;
        this.props.navigator.dismissAllModals({
                                          animationType: 'slide-down',
        });
      console.log (`Register whit user :  ${JSON.stringify(loggedUser.toJSON())}`);
      this.props.store.loading = false;
      })
  .catch((error) => {
    this.props.store.loading = false;
     const errorMessage = error.Message
     console.log(`Register fail with error: ${error}`);
     Alert.alert(
                          'Alert Title',
                          errorMessage,
                          [
                              {text: 'ok', onPress: () => console.log('Ask me later pressed')},
                          ],
                          { cancelable: false }
    );
    });
}


  render(){
        return (
                      <View style={s.container}>
                        <Image style={s.image} source={require('../assets/house.jpg')} />
                          <View style={s.container2}>
                              <Text style={s.welcomeText}> Hola </Text>
                              <Text style={s.welcomeText}> Bienvenido a casa. </Text>
                              <TextInput
                                   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   onChangeText={(email) => this.setState({email})}
                                   value={this.state.email}
                              />
                              <TextInput
                                   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                   onChangeText={(password) => this.setState({password})}
                                   value={this.state.password}
                                   secureTextEntry={true}
                              />
                          </View>
                          <View style={s.container3}>
                              <Buttonicon onPress={() => this.createUser()} title="SignUp" color={colors.orange} textcolor={colors.white} />
                              { this.props.store.loading ?  <ActivityIndicator size="small" color="#00ff00" /> : <Buttonicon onPress={() => this.login()} title="Sign in" color={colors.orange} textcolor={colors.white} /> }
                          </View>
                      </View>
        );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  container2: {
    flex: 7
  },
  container3: {
    flex: 3,
  },
  image: {
    position: 'absolute',
    height: 500,
    width: 500,
    borderRadius: 500 / 2,
    alignSelf: 'flex-end',
    marginTop:  140,
  },
  welcomeText: {
    paddingLeft: 15,
    fontFamily: fonts.hlfont,
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
  }
})
