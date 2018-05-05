import { Navigation } from 'react-native-navigation';

import { Provider } from 'mobx-react';
import AppStore from './store/AppStore';

import Maps from './screens/Maps';
import Aplications from './screens/Aplications';
import Home from './screens/Home';
import Profile from './screens/Profile';

import { colors } from './styles/Styles';



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
      label: 'Buscar',
      screen: 'hl.Maps', // this is a registered name for a screen
      icon: require('./assets/map.png'),
      selectedIcon: require('./assets/map.png'), // iOS only
      //title: 'Screen One'
    },
    {
      label: 'Solicitados',
      screen: 'hl.Aplications',
      icon: require('./assets/bookmark.png'),
      selectedIcon: require('./assets/bookmark.png'), // iOS only
      title: 'Solicitados'
    },
    {
      label: 'Casa',
      screen: 'hl.Home', // this is a registered name for a screen
      icon: require('./assets/bed.png'),
      selectedIcon: require('./assets/bed.png'), // iOS only
      title: 'Mi casa'
    },
    {
      label: 'Perfil',
      screen: 'hl.Profile',
      icon: require('./assets/male.png'),
      selectedIcon: require('./assets/male.png'), // iOS only
      //title: 'Screen Two'
    }
  ],
  tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
      tabBarButtonColor: colors.whitegray,
      tabBarSelectedButtonColor: colors.semiblack,
      tabBarBackgroundColor: colors.white, // change the background color of the tab bar
      tabBarTranslucent: true, // change the translucent of the tab bar to false
      tabBarTextFontFamily: 'System', //change the tab font family
      tabBarLabelColor: colors.whitegray, // iOS only. change the color of tab text
      tabBarSelectedLabelColor: colors.grayintense, // iOS only. change the color of the selected tab text
      forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
      tabBarHideShadow: true // Remove default tab bar top shadow (hairline)
}
});
