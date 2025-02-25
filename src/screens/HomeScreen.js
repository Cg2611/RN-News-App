import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.header}>News Categories</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20, 
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20, // To prevent content from being cut off at the bottom
  },
  tile: {
    backgroundColor: '#007bff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  tileText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
