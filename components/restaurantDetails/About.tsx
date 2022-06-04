import React from 'react';
import { View } from 'react-native';
import { RestaurantImage } from './RestaurantImage';
import { RestaurantName } from './RestaurantName';
import { RestaurantDescription } from './RestaurantDescription';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image:
    'https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg',
  price: '$$',
  reviews: '1500',
  rating: '4.5',
  categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories
  .map(category => category.title)
  .join(' • ');

const description = `${formattedCategories} ${
  price ? `• ${price}` : ''
} • 💳 • ${rating} ⭐ (${reviews}+)`;

export const About = () => (
  <View>
    <RestaurantImage image={image} />
    <RestaurantName name={name} />
    <RestaurantDescription description={description} />
  </View>
);
