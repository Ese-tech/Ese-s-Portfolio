import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '../utils/api';
import { WebView } from 'react-native-webview';

const MovieDetails = ({ route }) => {
  const { movieId } = route.params;
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsData = await getMovieDetails(movieId);
      const creditsData = await getMovieCredits(movieId);
      const videosData = await getMovieVideos(movieId);
      setDetails(detailsData);
      setCredits(creditsData);
      setVideos(videosData.filter(video => video.type === 'Trailer'));
    };
    fetchDetails();
  }, [movieId]);

  if (!details) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.overview}>{details.overview}</Text>
      <Text style={styles.sectionTitle}>Cast</Text>
      <ScrollView horizontal>
        {credits.map(actor => (
          <View key={actor.id} style={styles.actorContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w200${actor.profile_path}` }}
              style={styles.actorImage}
            />
            <Text style={styles.actorName}>{actor.name}</Text>
          </View>
        ))}
      </ScrollView>
      {videos.length > 0 && (
        <TouchableOpacity style={styles.trailerButton} onPress={() => setShowTrailer(true)}>
          <Text style={styles.trailerButtonText}>Watch Trailer</Text>
        </TouchableOpacity>
      )}
      <Modal visible={showTrailer} transparent={true}>
        <View style={styles.modalContainer}>
            <WebView
                source={{ uri: `https://www.youtube.com/watch?v=${videos[0]?.key}` }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowTrailer(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  overview: {
    fontSize: 16,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  actorContainer: {
    margin: 10,
    alignItems: 'center',
  },
  actorImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorName: {
    marginTop: 5,
    textAlign: 'center',
  },
  trailerButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  trailerButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
      color: '#000',
  }
});

export default MovieDetails;
