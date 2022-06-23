import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FoodProps } from '../types';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
});
export const FoodInfo: React.FC<FoodProps> = ({ food }) => {
  const { title, description, price } = food;
  return (
    <View
      style={{
        width: 200,
        justifyContent: 'space-evently',
      }}
    >
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};
