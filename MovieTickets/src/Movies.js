import React, { Component } from 'react';

import {
  ScrollView,
  Test,
  View
} from 'react-native';
import { movies } from './data';

const DATABASEURL = ' http://127.0.0.1:3000/v1/movies.json'

export default class Movies extends Component {


  constructor(props) {
    super(props);
    this.state = {
      responseData: {}
    }
  },

  return fetch(DATABASEURL)
   .then((response) => response.json())
   .then((responseJson) => {
     this.state: responseJson.movies;
   })
   .catch((error) => {
     console.error(error);
   });
},

  render() {
    return (
      <View>
        <ScrollView>
          {movies.map((movie, index) => <Text>{movie.title}</Text>)}
        <ScrollView>
      </View>
    )
  }
}
