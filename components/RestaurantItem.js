import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';
import { theme } from '../theme';

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View
        style={{
          padding: 15,
          backgroundColor: theme.white,
        }}
      >
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}
