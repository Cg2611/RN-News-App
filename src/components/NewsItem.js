// src/components/NewsItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const placeholderImage = 'https://via.placeholder.com/150';

const NewsItem = ({ article, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image
      source={{ uri: article.image_url || placeholderImage }}
      style={styles.image}
    />
    <Text style={styles.title}>{article.title}</Text>
    <Text style={styles.description}>{article.description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  description: { fontSize: 14, color: '#555' },
});

export default NewsItem;
