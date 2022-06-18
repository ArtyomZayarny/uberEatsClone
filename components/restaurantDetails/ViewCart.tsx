import { View, Text } from 'react-native';
import React from 'react';
// import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

export const ViewCart: React.FC = () => {
  // const items = useSelector((state) => state.cartReducer.selectedItems.items);
  // const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
  // const totalUSD = total.toLocaleString('en', {
  //   style: 'currency',
  //   currency: 'USD',
  // });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}
        >
          <Text
            style={{
              color: theme.white,
              fontSize: 20,
            }}
          >
            ViewCart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
