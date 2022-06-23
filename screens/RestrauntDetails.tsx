import { View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { About } from '../components/restaurantDetails/About';
import { MenuItems } from '../components/restaurantDetails/MenuItems';
import { ViewCart } from '../components/restaurantDetails/ViewCart';

const foods = [
  {
    id: 1,
    title: 'Chicken',
    description: 'Chicken is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'Beef',
    description: 'Beef is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: 'Pork',
    description: 'Pork is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    title: 'Fish',
    description: 'Fish is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    title: 'Vegetables',
    description: 'Vegetables is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    title: 'Fruits',
    description: 'Fruits is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 7,
    title: 'Desserts',
    description: 'Desserts is a meaty, succulent bird.',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];
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
      <MenuItems restaurantName={route.params.name} foods={foods} marginLeft={20} />
      {total ? <ViewCart navigation={navigation} total={totalUSD} /> : null}
    </View>
  );
};
