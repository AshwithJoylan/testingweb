/**
 * Razzle React Native Web Example
 * https://github.com/jaredpalmer/razzle
 *
 * Generated with the Lezzmo Razzle Treact Natigation template
 * https://github.com/lezzmo/razzle-treact-natigation
 * 
 * This file starts the Web client.
 *
 * @format
 */

/* eslint-disable */
import React from 'react';
import App from './App';
import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

if (module.hot) {
  module.hot.accept();
}
