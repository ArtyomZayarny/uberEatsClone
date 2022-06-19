import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { About } from '../components/restaurantDetails/About';
import { MenuItems } from '../components/restaurantDetails/MenuItems';
import { ViewCart } from '../components/restaurantDetails/ViewCart';

export const RestaurantDetails: React.FC = ({ route, navigation }) => {
  const items = useSelector((state) => state.cart.selectedItems.items);
  const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, current) => prev + current, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  return (
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
      <MenuItems restaurantName={route.params.name} />
      {total ? <ViewCart navigation={navigation} restaurantName={route.params.name} total={totalUSD} /> : null}
    </View>
  );
};
