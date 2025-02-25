// src/screens/NewsListScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchNewsByCategory } from '../api/newsApi';
import NewsItem from '../components/NewsItem';

const NewsListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const articles = await fetchNewsByCategory(category);
      setNewsArticles(articles);
      setLoading(false);
    };
    getNews();
  }, [category]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={newsArticles}
        keyExtractor={(item) => item.link}
        renderItem={({ item }) => (
          <NewsItem
            article={item}
            onPress={() => navigation.navigate('ArticleDetail', { article: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  loader: { flex: 1, justifyContent: 'center' },
});

export default NewsListScreen;
