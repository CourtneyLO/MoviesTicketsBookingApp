import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster'

export default class Movies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          >

          {movies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    paddingTop: 20,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
