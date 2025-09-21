import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default function FadeInImage() {
 
 // Creamos un valor animado para la opacidad, comienza en 0 (invisible)

  const opacity = useRef(new Animated.Value(0)).current;

useEffect(() => {
  // Esperamos medio segundo para que se note
  setTimeout(() => {
    Animated.timing(opacity, {
      toValue: 1, // Opacidad final: 100%
      duration: 3000, // más lenta
      useNativeDriver: true, // Mejor rendimiento usando driver nativo
    }).start(); // Inicia la animación
  }, 500);
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagen con Fade In</Text>
      
       {/* Imagen que aparecerá con animación de opacidad */}
      
      <Animated.Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' }} // icono de video/cámara
        style={[styles.image, { opacity }]}  // Aplicamos animación de opacidad
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
