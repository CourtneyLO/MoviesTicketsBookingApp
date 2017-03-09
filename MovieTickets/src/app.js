import React, { Component} from 'react'
import {
  Navigator,
} from 'react-native';

import Movies from './Movies';

const RouteMapper = (route, navgiator) => {
  if (route.name === "Movies") {
    return <Movies navigator={navigator}>
  }
};

export default class App extends Component {
  render()
    return (
      <Navigator
        initialRoute={{ name: "Movies" }}
        configScene={(route, routeScrene) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}
