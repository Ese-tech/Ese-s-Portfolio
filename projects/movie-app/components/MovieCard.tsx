import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Movie, TVSeries } from '../types';
import { useAuth } from '../context/AuthContext';
import { useMovieContext } from '../context/MovieContext';
import { useRouter } from 'expo-router';

interface MovieCardProps {
  item: Movie | TVSeries;
  type: 'movie' | 'tv';
}

const MovieCard: React.FC<MovieCardProps> = ({ item, type }) => {
  const { user } = useAuth();
  const { fetchTrailer } = useMovieContext();
  const router = useRouter();

  const handleWatchNow = () => {
    if (user) {
      // Navigate to the movie/TV series page
      router.push(`/${type}/${item.id}`);
    } else {
      // Navigate to the login page
      router.push('/login');
    }
  };

  const handleWatchTrailer = () => {
    fetchTrailer(item.id, type);
  };

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
        style={styles.poster} 
      />
      <View style={styles.info}>
        <Text style={styles.title}>{'title' in item ? item.title : item.name}</Text>
        <Text style={styles.rating}>Rating: {item.vote_average}</Text>
        <View style={styles.buttonContainer}>
          {user ? (
            <TouchableOpacity style={styles.button} onPress={handleWatchNow}>
              <Text style={styles.buttonText}>Watch Now</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleWatchTrailer}>
              <Text style={styles.buttonText}>Watch Trailer</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A213E',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    width: 300,
  },
  poster: {
    width: '100%',
    height: 450,
  },
  info: {
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#0A0F28',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieCard;
