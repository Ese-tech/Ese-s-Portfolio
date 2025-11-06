import React from 'react';
import { MovieProvider } from '../context/MovieContext';
import { AuthProvider } from '../context/AuthContext';
import { Slot } from 'expo-router';
import Navigation from '../components/navigation';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AppLayout = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A0F28', '#1A213E', '#2C3A5B']}
        style={styles.gradient}
      />
      <Navigation />
      <Slot />
    </View>
  );
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <MovieProvider>
        <AppLayout />
      </MovieProvider>
    </AuthProvider>
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
});

export default RootLayout;
