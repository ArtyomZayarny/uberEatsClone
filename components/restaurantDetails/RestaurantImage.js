import { Image } from 'react-native';
import React from 'react';

export const RestaurantImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={{ width: '100%', height: 180 }}
    />
  );
};
