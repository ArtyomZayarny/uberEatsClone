import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { View, Text } from 'react-native';

export const BottomIcon = ({ icon, text }) => (
  <View>
    <FontAwesome5
      name={icon}
      size={20}
      style={{
        marginBottom: 3,
        alignSelf: 'center',
      }}
    />
    <Text>{text}</Text>
  </View>
);
