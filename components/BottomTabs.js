import { View, Text } from 'react-native';
import React from 'react';

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
      <Text>BottomTabs</Text>
      <Text>BottomTabs</Text>
      <Text>BottomTabs</Text>
    </View>
  );
}
