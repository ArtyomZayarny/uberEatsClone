import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';
import { theme } from '../../theme';

export default function RestaurantItems({ navigation, restaurantData }) {
  return (
    <>
      {restaurantData.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          onPress={() => {
            navigation.navigate('RestaurantDetails', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            });
          }}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
        >
          <View
            style={{
              padding: 15,
              backgroundColor: theme.white,
            }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
