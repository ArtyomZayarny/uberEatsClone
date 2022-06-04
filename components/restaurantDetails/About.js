import { View } from "react-native";
import React from "react";
import { RestaurantImage } from "./RestaurantImage";
import { RestaurantTitle } from "./RestaurantTitle";
import { RestaurantDescription } from "./RestaurantDescription";

const image =
  "https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai - Comfort Food $$ (2913+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}
