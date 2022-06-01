import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetails/About';
import MenuItems from '../components/restaurantDetails/MenuItems';

export default function RestrauntDetails() {
  return (
    <View>
      <About />
      <Divider
        width={1.8}
        style={{
          marginVertical: 20,
        }}
      />
      <MenuItems />
    </View>
  );
}
