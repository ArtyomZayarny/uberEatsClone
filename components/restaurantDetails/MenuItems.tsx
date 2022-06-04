import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import { FoodCard } from './food-card';

const foods = [];
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export default function MenuItems() {
  return (
    <ScrollView>
      {foods.map(food => (
        <View key={food.id}>
          <View style={styles.menuItemStyle}>
            <FoodCard food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}
