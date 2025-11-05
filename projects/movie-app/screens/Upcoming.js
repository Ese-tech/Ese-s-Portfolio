import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { getUpcomingMovies } from '../utils/api';

const Upcoming = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();
      setMovies(upcomingMovies);
    };
    fetchMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    width: 180,
    height: 250,
    margin: 5,
  },
});

export default Upcoming;
