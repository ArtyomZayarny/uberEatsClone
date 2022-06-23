import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { FoodCard } from './food-card';

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export const MenuItems: React.FC = ({ restaurantName, foods, hideCheckbox }) => {
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
            {hideCheckbox ? null : (
              <BouncyCheckbox
                fillColor="green"
                iconStyle={{
                  borderColor: 'lightgray',
                  borderRadius: 0,
                }}
                isChecked={isFoodInCart(food, items)}
                onPress={(checkboxValue) => selectItems(food, checkboxValue)}
              />
            )}
            <FoodCard food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
};
