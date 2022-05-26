import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/Home/BottomTabs';
import Categories from '../components/Home/Categories';
import HeaderTabs from '../components/Home/HeaderTabs';
import RestaurantItems from '../components/Home/RestaurantItems';
import SearchBar from '../components/Home/SearchBar';
import { theme } from '../theme';

const YELP_API_KEY =
  'rMa0Nu05h5SLg6PxdDlunS2YcapfrhBQh7OTJiVzaJ-K_LwaLwJZePzKm6ZLd5MGI4tMqQTgswRwSo08BvqO_6ygFr0mgiTWS3VCnFPuHJwFia924hwacRu7RwWIYnYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [location, setLocation] = useState('SanDiego');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [location, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: theme.gray, flex: 1 }}>
      <View style={{ backgroundColor: theme.white, padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar locationHandler={setLocation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
