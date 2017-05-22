
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Header from './src/components/header';

export default class albums extends Component {
  render() {
    return (
      <Header headerText={'Albums'} />
    );
  }
}

AppRegistry.registerComponent('albums', () => albums);
