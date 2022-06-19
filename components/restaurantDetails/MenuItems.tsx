import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { FoodCard } from './food-card';

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
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export const MenuItems: React.FC = ({ restaurantName }) => {
  const dispatch = useDispatch();
  const selectItems = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, restaurantName, checkboxValue },
    });
  const items = useSelector((state) => state.cart.selectedItems.items);
  const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food) => (
        <View key={food.id}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              fillColor="green"
              iconStyle={{
                borderColor: 'lightgray',
                borderRadius: 0,
              }}
              isChecked={isFoodInCart(food, items)}
              onPress={(checkboxValue) => selectItems(food, checkboxValue)}
            />
            <FoodCard food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
};
