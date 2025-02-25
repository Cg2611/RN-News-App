import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Image, RefreshControl } from 'react-native';

// Sample Static News Data
const allNewsArticles = [
  { id: '1', title: 'Tech Breakthrough in AI', content: 'AI is changing the world.', image: 'https://source.unsplash.com/400x300/?technology,ai' },
  { id: '2', title: 'Global Markets Show Recovery', content: 'Stock markets show signs of growth.', image: 'https://source.unsplash.com/400x300/?finance,stocks' },
  { id: '3', title: 'Sports Update: Finals Excite Fans', content: 'An intense championship final!', image: 'https://source.unsplash.com/400x300/?sports,stadium' },
  { id: '4', title: 'New Space Discovery', content: 'Astronomers found a new exoplanet.', image: 'https://source.unsplash.com/400x300/?space,astronomy' },
  { id: '5', title: 'Health & Wellness Tips', content: 'Stay healthy with these expert tips.', image: 'https://source.unsplash.com/400x300/?health,fitness' },
  { id: '6', title: 'Political Shifts Worldwide', content: 'Elections bring major changes.', image: 'https://source.unsplash.com/400x300/?politics,government' },
  { id: '7', title: 'Advancements in Renewable Energy', content: 'Solar and wind energy are booming.', image: 'https://source.unsplash.com/400x300/?renewable,energy' },
  { id: '8', title: 'Film Industry Surprises Fans', content: 'Blockbuster movies dominate theaters.', image: 'https://source.unsplash.com/400x300/?movies,cinema' },
  { id: '9', title: 'Travel Destinations to Explore', content: 'Discover amazing places this year.', image: 'https://source.unsplash.com/400x300/?travel,destinations' },
  { id: '10', title: 'AI in Healthcare', content: 'AI is revolutionizing medicine.', image: 'https://source.unsplash.com/400x300/?ai,medicine' },
];

// Function to get random articles
const getRandomArticles = () => {
  let shuffled = [...allNewsArticles].sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, 5); // Get first 5 random articles
};

const NewsItem = ({ article }) => (
  <View style={styles.card}>
    <Image source={{ uri: article.image }} style={styles.image} />
    <Text style={styles.title}>{article.title}</Text>
    <Text style={styles.content}>{article.content}</Text>
  </View>
);

const App = () => {
  const [newsArticles, setNewsArticles] = useState(getRandomArticles());
  const [refreshing, setRefreshing] = useState(false);

  // Handle Pull-to-Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setNewsArticles(getRandomArticles()); // Load new random articles
      setRefreshing(false);
    }, 1000); // Simulating a network request delay
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📰 News App</Text>
      <FlatList
        data={newsArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsItem article={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
