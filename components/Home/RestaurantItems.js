import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';
import { theme } from '../../theme';

export default function RestaurantItems({ restaurantData }) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {/* Loop restaurant items */}
      {restaurantData.map((restaurant) => (
        <View
          key={restaurant.id}
          style={{
            padding: 15,
            backgroundColor: theme.white,
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}
