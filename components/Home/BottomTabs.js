import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BottomIcon } from './BottomIcon';

export default function BottomTabs() {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          marginHorizontal: 15,
          justifyContent: 'space-between',
        }}
      >
        <BottomIcon icon="home" text="Home" />
        <BottomIcon icon="search" text="Browser" />
        <BottomIcon icon="shopping-bag" text="Grocery" />
        <BottomIcon icon="receipt" text="Orders" />
        <BottomIcon icon="user" text="Account" />
      </View>
    </TouchableOpacity>
  );
}
