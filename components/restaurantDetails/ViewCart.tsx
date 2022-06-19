import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

export const ViewCart: React.FC = ({ total }) => {
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 15,
            alignItems: 'center',
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}
        >
          <Text
            style={{
              color: theme.white,
              fontSize: 20,
              marginRight: 30,
            }}
          >
            ViewCart
          </Text>
          <Text
            style={{
              color: theme.white,
              fontSize: 20,
            }}
          >
            {total}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
