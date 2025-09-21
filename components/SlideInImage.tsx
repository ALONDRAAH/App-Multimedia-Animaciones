import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default function SlideInImage() {
   // Valor animado para posición vertical (translateY)
  const position = useRef(new Animated.Value(-300)).current; // Comienza fuera de pantalla arriba

useEffect(() => {
  // Esperamos un segundo antes de deslizar
  setTimeout(() => {
    Animated.timing(position, {
      toValue: 0, // Deslizar hasta posición original
      duration: 2000, // más lenta
      useNativeDriver: true,
    }).start();
  }, 1000);
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagen Deslizante</Text>
      
       {/* Imagen animada que se desliza desde arriba */}
       
      <Animated.Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png' }} // icono relacionado a multimedia
        style={[styles.image, { transform: [{ translateY: position }] }]}
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
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});
