import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';
import { theme } from '../theme';

const YELP_API_KEY =
  'rMa0Nu05h5SLg6PxdDlunS2YcapfrhBQh7OTJiVzaJ-K_LwaLwJZePzKm6ZLd5MGI4tMqQTgswRwSo08BvqO_6ygFr0mgiTWS3VCnFPuHJwFia924hwacRu7RwWIYnYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [location, setLocation] = useState('SanDiego');
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [location]);

  return (
    <SafeAreaView style={{ backgroundColor: theme.gray, flex: 1 }}>
      <View style={{ backgroundColor: theme.white, padding: 15 }}>
        <HeaderTabs />
        <SearchBar locationHandler={setLocation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
