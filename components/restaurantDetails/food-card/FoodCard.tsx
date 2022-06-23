import React from 'react';
import { FoodImage } from './food-image';
import { FoodInfo } from './food-info';
import { FoodProps } from './types';

export const FoodCard: React.FC<FoodProps> = ({ food, marginLeft }) => (
  <>
    <FoodInfo food={food} />
    <FoodImage food={food} marginLeft={marginLeft} />
  </>
);
