import React from 'react';
import { View, Image } from 'react-native';
import { FoodProps } from '../types';

export const FoodImage: React.FC<FoodProps> = ({ food, marginLeft }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft,
      }}
    />
  </View>
);
