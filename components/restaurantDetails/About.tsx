import React from 'react';
import { View } from 'react-native';
import { RestaurantImage } from './RestaurantImage';
import { RestaurantName } from './RestaurantName';
import { RestaurantDescription } from './RestaurantDescription';

export const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((category) => category.title).join(' • ');

  const description = `${formattedCategories} ${price ? `• ${price}` : ''} • 💳 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};
