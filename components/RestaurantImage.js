import React from 'react';
import { theme } from '../theme';
import { Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantImage() {
  return (
    <>
      <Image
        source={{
          uri: 'https://arlingtonva.s3.amazonaws.com/wp-content/uploads/sites/25/2013/12/restaurant.jpeg',
        }}
        style={{ width: '100%', height: 180 }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
        }}
      >
        <MaterialCommunityIcons
          name="heart-outline"
          size={23}
          color={theme.white}
        />
      </TouchableOpacity>
    </>
  );
}
