import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import { useMovieContext } from '../context/MovieContext';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import YouTube from 'react-youtube';

const Home = () => {
  const { movies, user } = useMovieContext();
  const router = useRouter();
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMoviePress = (movieId) => {
    if (user) {
      router.push(`/movie/${movieId}`);
    } else {
      fetchTrailer(movieId);
    }
  };

  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=YOUR_API_KEY`);
      const data = await response.json();
      const trailer = data.results.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerUrl(trailer.key);
        setModalVisible(true);
      } else {
        alert('Trailer not found.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => handleMoviePress(item.id)} style={styles.movieContainer}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <LinearGradient
        colors={['#0A0F28', '#1A213E', '#2C3A5B']}
        style={styles.gradient}
      />
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        contentContainerStyle={styles.movieList}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
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
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  movieList: {
    padding: 20,
  },
  movieContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
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