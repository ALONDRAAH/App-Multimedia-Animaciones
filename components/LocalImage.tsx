import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function LocalImage() {
  // Animación de escala
  const scale = useRef(new Animated.Value(1)).current;

 // Función para animar pulso (escala a 1.2 y regresa a 1)

  const animatePulse = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2, // Escalar un poco más grande
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1, // Volver a tamaño original
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagen Local Animada (react-logo.png)</Text>
      <TouchableWithoutFeedback onPress={animatePulse}>
        <Animated.Image
          source={require('../assets/images/react-logo.png')} // Imagen local
          style={[styles.image, { transform: [{ scale }] }]} // Aplicamos animación de escala
        />
      </TouchableWithoutFeedback>
      <Text style={styles.instruction}>Toca la imagen para animarla</Text>
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
  instruction: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
