// src/screens/ArticleDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.image_url && (
        <Image source={{ uri: article.image_url }} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content || article.description || 'Content not available.'}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(article.link)}>
        Read more
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, color: '#333', marginBottom: 10 },
  link: { color: '#007bff', fontSize: 16 },
});

export default ArticleDetailScreen;
