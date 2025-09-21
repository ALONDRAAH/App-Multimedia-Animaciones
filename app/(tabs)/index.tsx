import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

// Importamos los componentes personalizados para mostrar imágenes y animaciones

import LocalImage from '../../components/LocalImage';
import RemoteImage from '../../components/RemoteImage';
import FadeInImage from '../../components/FadeInImage';
import SlideInImage from '../../components/SlideInImage';
import Gallery from '../../components/Gallery';

export default function HomeScreen() {
  return (

 // ScrollView para que la pantalla sea scrollable en caso de contenido largo

    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Título principal de la pantalla */} 
      
      <Text style={styles.header}>📱 App de Multimedia y Animaciones</Text>

     {/* Renderizamos los diferentes componentes de imagen y animación */}

      <LocalImage />
      <RemoteImage />
      <FadeInImage />
      <SlideInImage />
      <Gallery />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Centrar contenido horizontalmente
    backgroundColor: '#f4f4f8',
    minHeight: '100%', // Ocupa toda la altura disponible
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
});
