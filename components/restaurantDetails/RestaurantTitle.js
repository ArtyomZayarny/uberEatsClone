import { View, Text } from 'react-native';
import React from 'react';

export const RestaurantTitle = ({ title }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {title}
    </Text>
  );
};
