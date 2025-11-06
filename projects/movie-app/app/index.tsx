import React from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableOpacity, Text } from 'react-native';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import YouTube from 'react-youtube';
import { Movie, TVSeries } from '../types';

const Home = () => {
  const { movies, tvSeries, trailerUrl, setTrailerUrl } = useMovieContext();

  return (
    <View style={styles.container}>
      <FlatList<Movie | TVSeries>
        data={movies.length > 0 ? movies : tvSeries}
        renderItem={({ item }) => <MovieCard item={item} type={movies.length > 0 ? 'movie' : 'tv'} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        contentContainerStyle={styles.movieList}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={trailerUrl !== null}
        onRequestClose={() => setTrailerUrl(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setTrailerUrl(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {trailerUrl && <YouTube videoId={trailerUrl} />}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieList: {
    padding: 20,
    justifyContent: 'space-around',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#1A213E',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Home;