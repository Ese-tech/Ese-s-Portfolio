import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../utils/api';

const MovieDetail = () => {
  const { id } = useLocalSearchParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        const details = await getMovieDetails(id);
        setMovieDetails(details);
      }
    };
    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }} style={styles.poster} />
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.overview}>{movieDetails.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  poster: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
  },
});

export default MovieDetail;