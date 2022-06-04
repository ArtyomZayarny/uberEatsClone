import { Text } from 'react-native';
import React from 'react';

export const RestaurantDescription = ({ description }) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 16,
      }}
    >
      {description}
    </Text>
  );
};
