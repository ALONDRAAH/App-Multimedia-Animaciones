# 📱 App Multimedia y Animaciones - React Native con Expo

Este proyecto fue desarrollado como parte de una práctica investigativa en React Native utilizando Expo.  
Su objetivo es mostrar ejemplos funcionales del **manejo de imágenes y animaciones** en una app móvil.

---

## 🎯 Objetivos del Proyecto

- Mostrar imágenes locales y remotas.
- Usar animaciones básicas con la API de `Animated`.
- Aplicar buenas prácticas en la creación de componentes visuales.
- Desarrollar una interfaz sencilla e interactiva para demostrar los conceptos aprendidos.

---

## 🧱 Tecnologías y Herramientas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- API `Animated` de React Native
- Librerías integradas de React Native y Expo
- JavaScript / TypeScript

---

## 📸 Componentes Desarrollados

### 🔹 Imagen Local Animada (`LocalImage.tsx`)

> Al tocar la imagen local, esta realiza una animación de "pulso" (zoom in/out).

### 🔹 Imagen desde la Web (`RemoteImage.tsx`)

> Imagen cargada directamente desde una URL usando el componente `Image`.

### 🔹 FadeInImage (`FadeInImage.tsx`)

> Imagen que aparece con un efecto suave de desvanecimiento (`fade in`) utilizando `Animated`.

### 🔹 SlideInImage (`SlideInImage.tsx`)

> Imagen que se desliza desde arriba hacia abajo usando una animación de desplazamiento vertical.

### 🔹 Galería Horizontal (`Gallery.tsx`)

> Muestra una lista horizontal con varias imágenes (tanto locales como remotas) usando `FlatList`.

---

## 📂 Estructura del Proyecto

multimedia-animaciones/
│
├── assets/images/
│ └── react-logo.png.svg
│
├── components/
│ ├── FadeInImage.tsx
│ ├── Gallery.tsx
│ ├── LocalImage.tsx
│ ├── RemoteImage.tsx
│ └── SlideInImage.tsx
│
├── app/(tabs)/index.tsx
├── app.json
├── package.json
└── README.md

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/ALONDRAAH/App-Multimedia-Animaciones.git

Entra al directorio:

cd App-Multimedia-Animaciones


Instala dependencias:

npm install


Inicia la app con Expo:

npx expo start

👩‍🏫 Autor y Colaboradores

Grupo 3 – Multimedia y Animaciones

Práctica: React Native con Expo

💻 Alondra A.H.

📝 Licencia

Este proyecto fue desarrollado con fines académicos y educativos.
```
