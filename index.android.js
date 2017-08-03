// import libs
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
  <Header headerText={'Password'} />
);

// Regsiter component
AppRegistry.registerComponent('password', () => App);
