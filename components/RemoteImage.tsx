import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function RemoteImage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagen desde la Web</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

