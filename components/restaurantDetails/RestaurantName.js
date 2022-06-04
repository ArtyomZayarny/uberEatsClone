import { Text } from 'react-native';
import React from 'react';

export const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);
