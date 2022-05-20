import { View, Text } from 'react-native';
import React from 'react';
import { theme } from '../theme';

export default function RestaurantInfo({ name, rating }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 13, color: theme.black, fontStyle: 'italic' }}>
          30-45 - min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: theme.grayDark,
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
}
