import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient for background effect

const categories = [
  { id: 'top', title: 'Top News' },
  { id: 'world', title: 'World' },
  { id: 'business', title: 'Business' },
  { id: 'technology', title: 'Technology' },
  { id: 'science', title: 'Science' },
  { id: 'politics', title: 'Politics' },
  { id: 'sports', title: 'Sports' },
  { id: 'entertainment', title: 'Entertainment' },
  { id: 'health', title: 'Health' },
  { id: 'food', title: 'Food' },
  { id: 'environment', title: 'Environment' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.container}>
      {/* <Text style={styles.header}>📰 Latest News</Text> */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.tile}
            onPress={() => navigation.navigate('NewsList', { category: category.id })}
          >
            <Text style={styles.tileText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  tile: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // For Android shadow effect
  },
  tileText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
