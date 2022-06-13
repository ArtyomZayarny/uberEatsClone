import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import { About } from '../components/restaurantDetails/About';
import { MenuItems } from '../components/restaurantDetails/MenuItems';

export const RestaurantDetails: React.FC = ({ route }) => (
  <View>
    <About route={route} />
    <Divider
      width={1.8}
      style={{
        marginVertical: 20,
      }}
    />
    <MenuItems />
  </View>
);
