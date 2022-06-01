import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const foods = [
  {
    title: 'Chicken',
    description: 'Chicken with rice',
    price: '$10.00',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Chicken',
    description: 'Chicken with rice',
    price: '$10.00',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Chicken',
    description: 'Chicken with rice',
    price: '$10.00',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Chicken',
    description: 'Chicken with rice',
    price: '$10.00',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
];
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
});
export default function MenuItems() {
  return (
    <>
      <ScrollView>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const FoodInfo = (props) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: 'space-evently',
      }}
    >
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
        }}
      />
    </View>
  );
};
