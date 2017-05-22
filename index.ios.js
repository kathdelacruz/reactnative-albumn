
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Header from './src/components/header';

export default class albums extends Component {
  render() {
    return (
      <Header />
    );
  }
}

AppRegistry.registerComponent('albums', () => albums);
