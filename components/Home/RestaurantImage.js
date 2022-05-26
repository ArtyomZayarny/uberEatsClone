import React from 'react';
import { theme } from '../../theme';
import { Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantImage({ image }) {
  return (
    <>
      <Image
        source={{
          uri: image,
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
