/**
 * Generated with the Lezzmo Razzle Treact Natigation template
 * https://github.com/lezzmo/razzle-treact-natigation
 * 
 * This file will only be run by Razzle.
 *
 * @format
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';

/**
 * We're not using createBrowserApp() because server has no
 * browser history and having any kind of mocked/simulated
 * history serves no real purpose.
 */
export default createAppContainer(AppNavigator);