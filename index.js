import { Navigation } from 'react-native-navigation';

import Maps from './screens/Maps';
import Aplications from './screens/Aplications';
import Home from './screens/Home';
import Profile from './screens/Profile';

import { Provider } from 'mobx-react';
import AppStore from './store/AppStore';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('hl.Maps', () => Maps, AppStore, Provider);
  Navigation.registerComponent('hl.Aplications', () => Aplications, AppStore, Provider);
  Navigation.registerComponent('hl.Home', () => Home, AppStore, Provider);
  Navigation.registerComponent('hl.Profile', () => Profile, AppStore, Provider);
}

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'hl.Maps', // this is a registered name for a screen
      icon: require('./assets/albums.png'),
      selectedIcon: require('./assets/albums.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'hl.Aplications',
      icon: require('./assets/apple.png'),
      selectedIcon: require('./assets/apple.png'), // iOS only
      title: 'Screen Two'
    },
    {
      label: 'One',
      screen: 'hl.Home', // this is a registered name for a screen
      icon: require('./assets/attach.png'),
      selectedIcon: require('./assets/attach.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'hl.Profile',
      icon: require('./assets/approval.png'),
      selectedIcon: require('./assets/approval.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
