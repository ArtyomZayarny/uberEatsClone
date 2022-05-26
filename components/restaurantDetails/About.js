import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const image =
  'https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg';
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai - Comfort Food $$ (2913+)';

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = ({ image }) => {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={{ width: '100%', height: 180 }}
    />
  );
};
const RestaurantTitle = ({ title }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {title}
    </Text>
  );
};
const RestaurantDescription = ({ description }) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 16,
      }}
    >
      {description}
    </Text>
  );
};
