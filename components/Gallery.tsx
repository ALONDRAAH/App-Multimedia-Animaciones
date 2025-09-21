import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

// Lista de imágenes que incluye local y remotas
const imageList = [
  { id: '1', uri: require('../assets/images/react-logo.png') }, // Local 
  { id: '2', uri: { uri: 'https://reactnative.dev/img/tiny_logo.png' } }, // Web 
  { id: '3', uri: { uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png' } }, // Multimedia icon
  { id: '4', uri: { uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' } }, // Camera icon
];

const screenWidth = Dimensions.get('window').width; // Ancho de la pantalla para adaptar tamaños

export default function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text>
      <FlatList
        data={imageList}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false} // Ocultar barra de scroll
        renderItem={({ item }) => (
          <Image source={item.uri} style={styles.image} /> // Renderizamos cada imagen
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  image: {
    width: screenWidth * 0.5,  // La mitad del ancho de pantalla
    height: screenWidth * 0.5,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
