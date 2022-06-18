import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import { About } from '../components/restaurantDetails/About';
import { MenuItems } from '../components/restaurantDetails/MenuItems';
import { ViewCart } from '../components/restaurantDetails/ViewCart';

export const RestaurantDetails: React.FC = ({ route, navigation }) => (
  <View
    style={{
      position: 'relative',
      height: '100%',
    }}
  >
    <About route={route} />
    <Divider
      width={1.8}
      style={{
        marginVertical: 20,
      }}
    />
    <MenuItems />
    <ViewCart navigation={navigation} restaurantName={route.params.name} />
  </View>
);
